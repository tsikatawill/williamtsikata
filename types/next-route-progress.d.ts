declare module "next-route-progress" {
  interface ProgressInterface {
    height?: number;
    color?: string;
    transitionDuration?: number;
    easingFunction?:
      | "ease-out"
      | "ease"
      | "ease-in"
      | "linear"
      | "ease-in-out";
  }

  export default function NextRouteProgress(
    props: ProgressInterface,
  ): import("react/jsx-runtime").JSX.Element;
}
