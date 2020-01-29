interface WellKnownSymbolsStatic {
    getLabel (value: symbol): string | undefined;
    isWellKnown (value: symbol): boolean;
}

declare const WellKnownSymbols: WellKnownSymbolsStatic;

export default WellKnownSymbols;
