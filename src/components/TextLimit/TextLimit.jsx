export function TextLimit({ text, limit, as: Component = "p" }) {
    const textLimited = text?.length > limit ? `${text.substring(0, limit)}...` : text;
    return <Component>{textLimited}</Component>;
  }