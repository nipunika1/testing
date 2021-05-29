import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms' 

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  productForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
    
  }  
  ngOnInit(): void {
    this.productForm = this.fb.group({  
      phone: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],  
      otherNumbers: this.fb.array([]) ,  
    });  
  }
  quantities() : FormArray {  
    return this.productForm.get("otherNumbers") as FormArray  
  }  
  newQuantity(): FormGroup {  
    return this.fb.group({  
      phoneNumber : ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]], 
      
    })  
  }
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.productForm.value);  
  }  

}