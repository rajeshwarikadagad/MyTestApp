import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerForm!: FormGroup;
  submited: boolean = false;
  hobiesList: string[] = ['']
  userList: any = [];
  keyNameforSearch: any = null;
  userListFilter: any = [];
  formId: number = 0;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      hobbies: this.formBuilder.array([]),
      checkMe: ['', Validators.required]
    })
    if (this.hobiesList.length) {
      this.hobiesList.forEach(item => { this.hobbies.push(this.formBuilder.group({ hoby: [item, Validators.required] })) });
    } else {
      this.hobbies.push(this.formBuilder.group({ hoby: '' }))
    }


  }

  get formControls() {
    return this.registerForm.controls;
  }

  get hobbies() {
    return this.registerForm.get('hobbies') as FormArray;
  }
  onFormSubmit() {
    this.submited = true;
    if (this.registerForm.invalid) {
      window.alert('All the fields are Required');
      return
    }

    // this.userList.push(this.registerForm.getRawValue());
    let formValues = this.registerForm.getRawValue();
    Object.assign(formValues, { id: this.formId })

    // this.userList = this.registerForm.getRawValue();
    this.userList.push(formValues);
    this.formId++;
    // formValues.forEach((item: any) =>  this.userList.push(item));

    console.log('my form values', this.registerForm.getRawValue());
    console.log('my form values', this.userList);

  }
  addNewHoby() {

    this.hobiesList.length++;
    this.hobbies.push(this.formBuilder.group({ hoby: '' }))


  }
  onClickformReset() {
    this.registerForm.reset();
    this.hobiesList = [''];
    this.keyNameforSearch = null
  }
  deleteRecord(index: any, selectedRow: any) {
    this.userList.splice(index, 1)
    return this.userList;
  }
  deleteRecordFilter(index: any, selectedRow: any) {
    let itemIndex = -1;
    itemIndex = this.userList.findIndex((item: any) => item.id === selectedRow.id);
    if (itemIndex > -1) {
      this.userList.splice(itemIndex, 1);
    }
    this.userListFilter.splice(index, 1);


  }

  searchByName() {
    let temValue = this.userList.filter((item: any) => item.name.toLowerCase() == this.keyNameforSearch.toLowerCase());
    this.userListFilter = temValue;
  }

}
