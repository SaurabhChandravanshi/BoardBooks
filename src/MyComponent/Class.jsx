import React from 'react';
import ClassItem from './ClassItem';
import { firebaseApp, auth, doc, getDoc, db } from '../Firebase';

export default function Class(props) {
    let subjects = [];
    if (localStorage.getItem('subjectList') === null) {
        getSubjectListFromSrrver();
        const classes = JSON.parse(localStorage.getItem('subjectList')).classes;
        subjects = classes.filter((obj) => obj.class === props.myClass)[0].subjects;
    } else {
        const classes = JSON.parse(localStorage.getItem('subjectList')).classes;
        subjects = classes.filter((obj) => obj.class === props.myClass)[0].subjects;
    }

    return (
        <div className='row'>
            <div className='col-sm-6'>
                <div className='container my-5'>
                    <div className='card'>
                        <div className='card-header active'>
                            {'Class ' + props.myClass + ' ' + props.medium + ' Medium'}
                        </div>
                        <ul className="list-group">
                            {subjects.map((sub) => <ClassItem subject={sub} key={sub} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

async function getSubjectListFromSrrver() {
    const docRef = doc(db, "BoardBooks", "subjectList");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        localStorage.setItem('subjectList', JSON.stringify(docSnap.data()));
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
