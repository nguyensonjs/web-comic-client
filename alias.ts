import path from "path";

const aliases: Record<string, string> = {
  "@": path.resolve(__dirname, "src"),
  "@components": path.resolve(__dirname, "src/components"),
  "@hooks": path.resolve(__dirname, "src/hooks"),
  "@utils": path.resolve(__dirname, "src/utils"),
};

export default aliases;
