import { ConcreteFragment } from "relay-runtime";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
declare const _TransactionDetailsSummaryItem_order$ref: unique symbol;
export declare type TransactionDetailsSummaryItem_order$ref = typeof _TransactionDetailsSummaryItem_order$ref;
export declare type TransactionDetailsSummaryItem_order = {
    readonly __typename: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly shippingTotal: string | null;
    readonly shippingTotalCents: number | null;
    readonly taxTotal: string | null;
    readonly taxTotalCents: number | null;
    readonly itemsTotal: string | null;
    readonly totalListPrice: string | null;
    readonly buyerTotal: string | null;
    readonly lastOffer?: ({
        readonly id: string;
        readonly amount: string | null;
        readonly amountCents: number;
        readonly shippingTotal: string | null;
        readonly shippingTotalCents: number | null;
        readonly taxTotal: string | null;
        readonly taxTotalCents: number | null;
        readonly buyerTotal: string | null;
        readonly buyerTotalCents: number | null;
        readonly fromParticipant: CommerceOrderParticipantEnum | null;
        readonly note: string | null;
    }) | null;
    readonly myLastOffer?: ({
        readonly id: string;
        readonly amount: string | null;
        readonly amountCents: number;
        readonly shippingTotal: string | null;
        readonly shippingTotalCents: number | null;
        readonly taxTotal: string | null;
        readonly taxTotalCents: number | null;
        readonly buyerTotal: string | null;
        readonly buyerTotalCents: number | null;
        readonly fromParticipant: CommerceOrderParticipantEnum | null;
        readonly note: string | null;
    }) | null;
    readonly " $refType": TransactionDetailsSummaryItem_order$ref;
};
declare const node: ConcreteFragment;
export default node;
