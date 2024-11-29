/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { PublicKey } from '@metaplex-foundation/umi';
import { Serializer, publicKey as publicKeySerializer, struct, u16, u64 } from '@metaplex-foundation/umi/serializers';


export type FeeRecipient = { owner: PublicKey; shareBps: number; totalClaimed: bigint;  };

export type FeeRecipientArgs = { owner: PublicKey; shareBps: number; totalClaimed: number | bigint;  };


export function getFeeRecipientSerializer(): Serializer<FeeRecipientArgs, FeeRecipient> {
  return struct<FeeRecipient>([['owner', publicKeySerializer()], ['shareBps', u16()], ['totalClaimed', u64()]], { description: 'FeeRecipient' }) as Serializer<FeeRecipientArgs, FeeRecipient>;
}

