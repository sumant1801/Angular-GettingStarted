import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";
//import { EventEmitter } from "events";

@Component({
    selector: 'star-rate',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;
    @Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClick.emit(`check rating ${this.rating}`);
    }

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.starWidth = this.rating * 75 / 5;
    }

}