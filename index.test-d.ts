import { expectType } from 'tsd'
import { getLabel, isWellKnown } from '.'

expectType<string | undefined>(getLabel(Symbol.iterator))
expectType<boolean>(isWellKnown(Symbol.iterator))

