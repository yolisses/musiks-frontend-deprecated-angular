import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-link',
  templateUrl: './list-link.component.html',
  styleUrls: ['./list-link.component.css'],
})
export class ListLinkComponent {
  @Input()
    icon:IconDefinition;

  @Input()
    text:string;

  faChevronRight = faChevronRight;

  


}
