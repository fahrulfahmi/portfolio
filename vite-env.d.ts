interface ImportMeta {
  readonly glob: (
    pattern: string,
    options?: { eager?: boolean; as?: "url" | "raw" }
  ) => Record<string, { default: string }>;
}
