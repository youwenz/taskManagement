import {
  Component,
  signal,
  computed,
  Input,
  input,
  Output,
  EventEmitter,
  output
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //mark this property as settable from outside (parameter)
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // @Input({required: true}) user!: {id: string, avatar: string, name: string}
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  //input signal tells angular this property is an parameter
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(()=> 'assets/users/' + this.avatar())

  //pass this data to the parent component
  onSelectUser() {
    this.select.emit(this.id);
  }
}
