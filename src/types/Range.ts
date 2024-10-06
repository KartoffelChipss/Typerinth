export type Range<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Range<N, [...Acc, Acc['length']]>;

export type Range0to100 = Range<101>;