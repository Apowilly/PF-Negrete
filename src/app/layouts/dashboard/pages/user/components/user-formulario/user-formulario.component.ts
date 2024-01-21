  import { Component, EventEmitter, Output ,Input, SimpleChanges} from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';
  
  @Component({
    selector: 'app-user-formulario',
    templateUrl: './user-formulario.component.html',
    styleUrl: './user-formulario.component.scss'
   })


   
  export class UserFormularioComponent {
    userForm: FormGroup;

    @Output()
    userSubmitter = new EventEmitter();

   @Input() usuarioEditando?: User; // Recibir el usuario a editar como entrada
  

  constructor(private fb: FormBuilder){
    this.userForm  = this.fb.group({
      nombre: this.fb.control('', Validators.required), 
      apellido: this.fb.control('', Validators.required), 
      email: this.fb.control('', Validators.required), 
      telefono: this.fb.control('', Validators.required), 
      perfil: this.fb.control('', Validators.required), 
      password: this.fb.control('', Validators.required), 
         });
         
     }

   ngOnChanges(changes: SimpleChanges){
    console.log("llega el usuario para editar ")
    if(changes["usuarioEditando"]){
      //ingresa los valores dentro del formulario
      this.userForm.patchValue({
        nombre: this.usuarioEditando?.nombre,
        apellido: this.usuarioEditando?.apellido,
        email: this.usuarioEditando?.email,
        telefono: this.usuarioEditando?.telefono,
        perfil: this.usuarioEditando?.perfil,
        password: this.usuarioEditando?.password
      })
    }
   }

     onSubmit() :void{
       if(this.userForm.invalid){
        this.userForm.markAllAsTouched();
       }else{
        this.userSubmitter.emit({...this.userForm.value, id: this.usuarioEditando?.id});
        

        this.userForm.reset();
       }
         
           }
  }
