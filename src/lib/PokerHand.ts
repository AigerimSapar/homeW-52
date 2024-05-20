// @ts-ignore

import Card from './Card';


class PokerHand {
    cards: Card[];

    constructor (cards: Card[]) {
        this.cards = cards;
    }

    getOutCome(): string {
        if(this.isRoyalFlush()) {
            return 'Роял-флэш';
        } else if ( this.isStraightFlush()) {
            return 'Стрит-флэш';
        }else if ( this.isFourOfaKind ()) {
            return 'Каре/Четвертка/Покер';
        }else if(this.isFullHouse ()) {
            return 'Фулл-Хаус';
        }else if (this.isFlush()) {
             return 'Флэш';
        }else if(this.isStraight()) {
            return 'Стрит';
        }else if(this.isThreeOfaKind()) {
            return 'Тройка';
        }else if ( this.isTwoPairs()) {
            return 'Две пары';
        } else if (this.isOnePair()) {
            return 'Одна пара';
        }else {
            return 'Старшая карта';
        }
    }
}

protected isRoyalFlush (): boolean {
    const RoyalFlushRanks = [ '10', 'J', 'Q', 'K', 'A'];
    const suits = new Set (this.cards.map(card => card.suit));
    if (suits.size !== 1) return false;
    const ranks = new Set (this.cards.map(card => card.suit));
    return royalFlushRanks.every(rank => ranks.has(rank));
}
protected isStraightFlush (): boolean {
    return this.isFlush() && this.isStraight();
}
protected isFourOfaKind  (): boolean {
    const ranCounts: {[rank:string]: number} = {};
    for (const card of this.cards) {
        rankCounts[card.runks] = (rankCounts[card.runk] || 0) + 1;
    }
    const counts = Object.values(runkCounts);
    return counts.includes(4) ;
}
protected isFullHouse (): boolean {
    const ranCounts: {[rank:string]: number} = {};
    for (const card of this.cards) {
        rankCounts[card.runks] = (rankCounts[card.runk] || 0) + 1;
    }
    const counts = Object.values(runkCounts);
    return counts.includes(3) && counts.includes(2);
}
protected isFlush (): boolean {
    return new Set (this.cards.map(card => card.suit)).size === 1;
}
protected  isStraight (): boolean {
    const sortedRanks = this.cards.map(card => parseInt(card.rank)).sort((a, b) => a - b);
    if(sortedRanks[0] === 1 && sortedRanks[1] === 10) {
        sortedRanks.push(0);
    }
    for (if i = 1; i < sortedRanks.length; i++) {
        if (sortedRanks[i] !== sortedRanks[i-1] + 1) {
            return false;
        }
    }
    return true;
}
protected  isThreeOfaKind(): boolean {
    const rankCounts: { [rank: string]: number } = {};
    for (const card of this.cards) {
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    }
    return Object.values(rankCounts).includes(3);
}
protected  isTwoPairs (): boolean {
    const rankCounts: { [rank: string]: number } = {};
    for (const card of this.cards) {
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    }
    const counts = Object.values(rankCounts);
    return counts.filter(count => count === 2).length === 2;
}
protected  isOnePair (): boolean {
    const rankCounts: { [rank:string]: number } = {};
    for(const card of this.cards) {
        rankCounts[cards.rank] = (rankCounts[card.rank] || 0) + 1;
    }
    return Object.values(rankCounts).includes(2);
}
export default PokerHand;