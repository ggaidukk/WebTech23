import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from '../shared/members.service';
import { Member } from '../shared/member';
import { CommonModule, NgForOf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  private service = inject(MembersService);
  allmembers: Member[] = [];
  filterarray: Member[] = [];

  search = new FormControl();
  async ngOnInit(): Promise<void> {
    this.allmembers = await this.service.getAllMembers();
    this.filterarray = this.allmembers;
	console.log('in ngOnInit -> allmembers', this.allmembers);
  }

  filterMembers(){
    let searchstring = this.search.value.toLowerCase();
    console.log(searchstring);
    this.filterarray = this.allmembers.filter((member) => {
      return member.firstname.toLowerCase().includes(searchstring)})
  }
}
