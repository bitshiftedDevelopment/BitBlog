import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  estYear: string = "2018";
  curYear: string;
  @Input() author: string;
  constructor() { }

  ngOnInit() {
    this.setCurYear();
  }

  private getCurrentYear():string {
    return String((new Date()).getFullYear());
  }
  private setCurYear() {
    this.curYear = this.getCurrentYear();
  }

}
