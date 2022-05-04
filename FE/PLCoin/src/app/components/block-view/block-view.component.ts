import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  @Input() block: any;
  constructor() { }

  ngOnInit(): void {
    console.log('block', this.block);
  }

}
