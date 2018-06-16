import ts from "typescript"

// This package uses two internal APIs to get access to the suggestion diagnostics added in TS 2.9
declare module "typescript" {
  interface Program {
    getDiagnosticsProducingTypeChecker(): ts.TypeChecker
  }

  interface TypeChecker {
    getSuggestionDiagnostics(
      file: ts.SourceFile
    ): Array<ts.DiagnosticWithLocation>
  }
}
