export class Hand {
    cards: number[];

    constructor(
        cards: number[]
    ) {
        this.cards = cards;
    }

    // Getters
    get cardsInHand(): number[] {
        return this.cards;
    }

    // Setters
    set cardsInHand(cards: number[]) {
        this.cards = cards;
    }
}