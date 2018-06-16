import * as ts from "typescript"
import * as Lint from "tslint"

export class Rule extends Lint.Rules.TypedRule {
  private parseDiagnosticMessage(message: string | ts.DiagnosticMessageChain) {
    if (typeof message !== "string") {
      return message.messageText
    } else {
      return message
    }
  }

  private mkRuleFailure(
    sourceFile: ts.SourceFile,
    diag: ts.DiagnosticWithLocation
  ) {
    return new Lint.RuleFailure(
      sourceFile,
      diag.start,
      diag.start + diag.length,
      this.parseDiagnosticMessage(diag.messageText),
      this.ruleName
    )
  }

  applyWithProgram(
    sourceFile: ts.SourceFile,
    program: ts.Program
  ): Lint.RuleFailure[] {
    const diagnostics = program
      .getDiagnosticsProducingTypeChecker()
      .getSuggestionDiagnostics(sourceFile)
    return diagnostics
      .filter(diag => {
        return (
          // See https://github.com/Microsoft/TypeScript/blob/v2.9.2/src/compiler/diagnosticMessages.json
          // for error code descriptions
          diag.code === 6133 ||
          diag.code === 6138 ||
          diag.code === 6192 ||
          diag.code === 6196 ||
          diag.code === 6198 ||
          diag.code === 6199
        )
      })
      .map(_ => this.mkRuleFailure(sourceFile, _))
  }
}
