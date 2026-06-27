declare module "js-cookie" {
  const Cookies: {
    set(name: string, value: string, options?: Record<string, unknown>): void;
    get(name: string): string | undefined;
    remove(name: string, options?: Record<string, unknown>): void;
  };

  export default Cookies;
}
