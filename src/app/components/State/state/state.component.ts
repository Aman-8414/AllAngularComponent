import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  stateform!: FormGroup;
  statedata: any;
  state!:any;

  isloanding:boolean=false;
  loadingTitle: string='';
  errors:any=[];
  
  State = {
    id: 0,
    countryid:0,
    name: ''
  };
  constructor(private fb: FormBuilder, private stateservice: StateService) {}

  ngOnInit() {
    this.stateform= this.fb.group({
      id: ['',Validators.required],
      countryid:['', Validators.required],
      name: ['', Validators.required]
    });
    this.GetAll();
  }

  GetAll() {
    this.stateservice.GetAllState().subscribe(
      (response) => {
        this.statedata = response;
      },
      (error) => {
        console.error('Error occurred while fetching states:', error);
      }
    );
  }

  deleteState(id: number) {
this.stateservice.deleleState(id).subscribe(res =>{
  console.log("Data delete Su..",res);
  window.location.reload();
}) 
  }


  EditStateById(country: any){
    debugger;
    this.stateform.patchValue({
      id: this.state.id,
      countryid:this.state.id,
      name: this.state.name
    });

  }

  SubmitState() {
    debugger
    if (this.stateform.valid) {
        const formData = this.stateform.value;
        console.log('Form Data:', formData);

        if (formData.id > 0) {
            this.UpdateState(formData);
        } else {
          
            this.PostState({ name: formData.name });
        }
    } else {
        console.error('Form is invalid');
    }
}

PostState(formData: any) {
  debugger
    console.log('Posting data:', formData);
    this.stateservice.PostState(formData).subscribe(
        (response) => {
            console.log('Data posted successfully:', response);
            window.location.reload();
            this.GetAll();
        },
        (error) => {
            console.error('Error occurred while posting state:', error);
        }
        
    );
}

UpdateState(formData: any) {
    console.log('Updating data:', formData);
    this.stateservice.updateState(formData).subscribe(
        (response) => {
            console.log('Data updated successfully:', response);
            this.GetAll();
        },
        (error) => {
            console.error('Error occurred while updating state:', error);
        }
    );
}
}
