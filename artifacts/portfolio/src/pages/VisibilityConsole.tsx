import * as React from "react";
import { Globe2, LockKeyhole, LogOut, RefreshCw, TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { useVisibility } from "@/hooks/useVisibility";
import { toast } from "@/hooks/use-toast";
import { formatVisibilityTimestamp } from "@/lib/visibility";

export default function VisibilityConsole() {
  const {
    apiUrl,
    config,
    effectiveAudience,
    isConfigured,
    isLoading,
    isSaving,
    refreshConfig,
    saveConfig,
    status,
  } = useVisibility();
  const [passcode, setPasscode] = React.useState("");
  const [unlocked, setUnlocked] = React.useState(false);
  const [globalStudioEnabled, setGlobalStudioEnabled] = React.useState(
    config.globalStudioEnabled,
  );
  const [pakistanStudioFilterEnabled, setPakistanStudioFilterEnabled] =
    React.useState(config.pakistanStudioFilterEnabled);

  React.useEffect(() => {
    setGlobalStudioEnabled(config.globalStudioEnabled);
    setPakistanStudioFilterEnabled(config.pakistanStudioFilterEnabled);
  }, [config.globalStudioEnabled, config.pakistanStudioFilterEnabled]);

  async function handleRefresh() {
    await refreshConfig();
    toast({
      title: "Visibility config refreshed",
      description: "Pulled the latest audience settings from the API.",
    });
  }

  function handleUnlock(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!passcode.trim()) {
      toast({
        title: "Passcode required",
        description: "Enter the admin passcode to unlock the controls.",
        variant: "destructive",
      });
      return;
    }

    setUnlocked(true);
  }

  async function handleSave() {
    try {
      await saveConfig({
        passcode,
        globalStudioEnabled,
        pakistanStudioFilterEnabled,
      });

      toast({
        title: "Visibility updated",
        description:
          "The global audience settings were saved and will affect new visitors.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Could not save visibility settings.";

      if (message === "Invalid admin passcode.") {
        setUnlocked(false);
        setPasscode("");
      }

      toast({
        title: "Save failed",
        description: message,
        variant: "destructive",
      });
    }
  }

  function handleLogout() {
    setUnlocked(false);
    setPasscode("");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-12 md:px-10">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-8">
          <div className="space-y-3">
            <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
              Hidden Visibility Console
            </span>
            <h1 className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Control who sees the studio version.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              This page is intentionally unlinked. Use it to switch the portfolio
              between the normal public experience and the studio-safe audience
              mode.
            </p>
          </div>

          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
          >
            Back to portfolio
          </a>
        </div>

        {!isConfigured ? (
          <Alert className="mt-8 border-amber-300/40 bg-amber-50/60 text-amber-950 dark:bg-amber-500/10 dark:text-amber-100">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>Visibility API URL is not configured</AlertTitle>
            <AlertDescription>
              Add `VITE_VISIBILITY_API_URL` to the portfolio build environment and
              deploy the Cloudflare Worker before this console can change the site
              globally.
            </AlertDescription>
          </Alert>
        ) : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-border bg-card shadow-[0_24px_54px_-42px_rgba(0,0,0,0.6)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <LockKeyhole className="h-5 w-5 text-primary" />
                Admin access
              </CardTitle>
              <CardDescription>
                The passcode is only kept in memory for this page session.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {!unlocked ? (
                <form className="space-y-4" onSubmit={handleUnlock}>
                  <div className="space-y-2">
                    <label
                      htmlFor="admin-passcode"
                      className="text-sm font-medium text-foreground"
                    >
                      Admin passcode
                    </label>
                    <Input
                      id="admin-passcode"
                      type="password"
                      autoComplete="current-password"
                      value={passcode}
                      onChange={(event) => setPasscode(event.target.value)}
                      placeholder="Enter the worker passcode"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Unlock controls
                  </Button>
                </form>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-4 rounded-2xl border border-border bg-background/80 p-4 dark:bg-background/30">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-foreground">
                          Global studio mode
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Everyone sees the studio-safe version.
                        </p>
                      </div>
                      <Switch
                        checked={globalStudioEnabled}
                        onCheckedChange={setGlobalStudioEnabled}
                        disabled={isSaving || !isConfigured}
                        aria-label="Toggle global studio mode"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-foreground">
                          Pakistan studio filter
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Pakistan visitors see the studio-safe version. Unknown
                          country also falls back to studio mode.
                        </p>
                      </div>
                      <Switch
                        checked={pakistanStudioFilterEnabled}
                        onCheckedChange={setPakistanStudioFilterEnabled}
                        disabled={isSaving || !isConfigured}
                        aria-label="Toggle Pakistan studio filter"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      type="button"
                      onClick={() => void handleSave()}
                      disabled={isSaving || !isConfigured}
                    >
                      {isSaving ? (
                        <>
                          <Spinner className="mr-1 size-4" />
                          Saving
                        </>
                      ) : (
                        "Save changes"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => void handleRefresh()}
                      disabled={isLoading || isSaving}
                    >
                      <RefreshCw className="mr-1 h-4 w-4" />
                      Refresh
                    </Button>
                    <Button type="button" variant="ghost" onClick={handleLogout}>
                      <LogOut className="mr-1 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-[0_24px_54px_-42px_rgba(0,0,0,0.6)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Globe2 className="h-5 w-5 text-primary" />
                Current live state
              </CardTitle>
              <CardDescription>
                What the worker is currently returning for this browser.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="grid gap-3 rounded-2xl border border-border bg-background/80 p-4 dark:bg-background/30">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium capitalize text-foreground">
                    {status}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Effective audience</span>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    {effectiveAudience}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Country seen by API</span>
                  <span className="font-medium text-foreground">
                    {config.countryCode ?? "Unknown"}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Last updated</span>
                  <span className="font-medium text-foreground">
                    {formatVisibilityTimestamp(config.updatedAt)}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background/80 p-4 text-muted-foreground dark:bg-background/30">
                <p className="font-medium text-foreground">API endpoint</p>
                <p className="mt-2 break-all font-mono text-xs leading-relaxed">
                  {apiUrl ?? "Not configured"}
                </p>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">
                This is audience shaping, not hard security. The public site still
                contains the code for both modes.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
