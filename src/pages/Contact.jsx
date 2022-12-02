import { async } from '@firebase/util';
import React,{ useState } from 'react';
import {app} from '../firebase-config'
import { getFirestore, collection, addDoc} from 'firebase/firestore';

const db = getFirestore(app)

const HookForm = () => {

    const valorInicial = {
      nombre: "",
      email: "",
      asunto: ""
    }

    const [user, setUser] = useState (valorInicial)
    const capturarInputs = (e) =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value})
    }

    const guardarDatos = async(e) => {
      e.preventDefault();
      console.log(user)
      try {
        await addDoc(collection(db, 'contact'),{
          ...user
        })
      } catch (error) {
        console.log(error)
      }
      setUser({...valorInicial})
    }

    return (
      <div className=' container'>
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={guardarDatos}>
              <div className="card card-body">
                <div className="form-group">
                  <input type="text" className='form-control mb-3' name='nombre' placeholder='Ingresar datos' onChange={capturarInputs} value={user.nombre}></input>
                  <input type="text" className='form-control mb-3' name='email' placeholder='Ingresar email' onChange={capturarInputs} value={user.email}></input>
                  <input type="text" className='form-control mb-3' name='asunto' placeholder='Ingresar asunto' onChange={capturarInputs} value={user.asunto}></input>

                  <button className='btn btn-primary mb-3'>
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
    };

    export default HookForm;