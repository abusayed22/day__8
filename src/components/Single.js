import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { pre_edit_update, pre_get_single_state } from '../redux/action/action';

function Single() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const cl = useSelector(state => state.userInfo.user)
  useEffect(() => {
    dispatch(pre_get_single_state(id))
  },[])

  const [allStudents,setAllStudents] = useState({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:''
  })
  useEffect(() => {
    if(cl) {
      setAllStudents({...allStudents && cl})
    }
  },[cl])
  const updatehanle = () => {
    dispatch(pre_edit_update(id,allStudents));
    navigate('/all_student')
  }
  return (
    <div>
      <center><h2>Add student</h2></center>
        <div style={{width:'350px',margin:'0 auto'}}>
        <form action="">
            <input style={{width:350,margin:'10px 0'}} value= {allStudents.name ||''} onChange={(e) => setAllStudents({...allStudents,name:e.target.value})} type="text" placeholder='Enter full Name..' />
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <input style={{width:120,margin:'10px 0'}} value= {allStudents.roll ||''} onChange={(e) => setAllStudents({...allStudents,roll:e.target.value})} type="number" placeholder='Roll:' />
            <input style={{width:200,margin:'10px 0'}} value= {allStudents.birth ||''} onChange={(e) => setAllStudents({...allStudents,birth:e.target.value})} type="date" placeholder='Brith Day:' />
            </div>
            <input style={{width:350,margin:'10px 0'}}  value= {allStudents.phone ||''} onChange={(e) => setAllStudents({...allStudents,phone:e.target.value})} type="number" placeholder='Phone Number' />
           
            <textarea style={{width:350}} value= {allStudents.address ||''} onChange={(e) => setAllStudents({...allStudents,address:e.target.value})} id="w3review" name="w3review" rows="4" cols="50" placeholder='Address'/>

            <button onClick={() => updatehanle()} style={{width:80,margin:'10px 0'}} type="button" className="btn btn-info">Update</button>
          </form>
        </div>
    </div>
  )
}

export default Single