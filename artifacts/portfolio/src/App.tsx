import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { VisibilityProvider } from "@/hooks/useVisibility";
import { useTheme } from "@/hooks/useTheme";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import VisibilityConsole from "@/pages/VisibilityConsole";

const queryClient = new QueryClient();

function Router({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {
  return (
    <Switch>
      <Route path="/visibility-console">
        <VisibilityConsole />
      </Route>
      <Route path="/">
        <Home theme={theme} toggleTheme={toggleTheme} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <VisibilityProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router theme={theme} toggleTheme={toggleTheme} />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </VisibilityProvider>
    </QueryClientProvider>
  );
}

export default App;
