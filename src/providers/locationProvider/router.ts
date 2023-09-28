if (window.history && window.history.pushState) {
  // Store the original pushState function
  const originalPushState = window.history.pushState.bind(window.history);

  // Override the pushState method
  window.history.pushState = function (...args) {
    const pushState = new CustomEvent("pushstate", {
      detail: {
        args,
      },
    });
    window.dispatchEvent(pushState);

    // Call the original pushState function
    return originalPushState(...args);
  };
}

export class Router {
  private state: { state?: string, unused?: string, url?: string } = {};
  constructor() {
    this.subscribe = this.subscribe.bind(this);
    this.snapshot = this.snapshot.bind(this);
  }

  subscribe(cb: () => void) {
    const set = (event: Event) => {
      const e = event as CustomEvent<{ args: [string, string, string] }>;
      const [state, unused, url] = e.detail.args;

      this.state = { state, unused, url };
      cb();
    };
    window.addEventListener("popstate", set);
    window.addEventListener("pushstate", set);

    return () => {
      window.removeEventListener("popstate", set);
      window.removeEventListener("pushstate", set);
    }
  }

  snapshot() {
    return this.state.url;
  }
}