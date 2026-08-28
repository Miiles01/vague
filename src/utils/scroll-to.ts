import { useScroll } from "@/hooks/smooth-scroll/use-scroll";

export const scrollTo = (id?: string | number, immediate?: boolean) => {
  const lenis = useScroll.getState().lenis;

  if (typeof id === "string") {
    const el = document.getElementById(id);
    if (!el) return;

    if (lenis) {
      lenis.start();
      lenis.scrollTo(el, { duration: 1.5, immediate });
    } else {
      window.scrollTo({
        top: getDistanceFromTop(el),
        behavior: immediate ? "instant" : "smooth",
      });
    }
  } else {
    if (lenis) {
      lenis.start();
      lenis.scrollTo(Number(id) || 0, { duration: 1.5, immediate });
    } else {
      window.scrollTo({
        top: Number(id) || 0,
        behavior: immediate ? "instant" : "smooth",
      });
    }
  }

  function getDistanceFromTop(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }
};
