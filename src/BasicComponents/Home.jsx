import React from 'react';
import HomeCardItem from './HomeCardItem';

export default function Home() {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <HomeCardItem title='Class 9th' desc='Books based on CGBSE Syllabus.' items={['Hindi Medium Books', 'English Medium Books']} />
                        <HomeCardItem title='Class 10th' desc='Books based on CGBSE Syllabus.' items={['Hindi Medium Books', 'English Medium Books']} />
                        <HomeCardItem title='Class 11th' desc='Books based on CGBSE Syllabus.' items={['Hindi Medium Books', 'English Medium Books']} />
                        <HomeCardItem title='Class 12th' desc='Books based on CGBSE Syllabus.' items={['Hindi Medium Books', 'English Medium Books']} />
                    </div>
                </div>
            </div>
        </>
    );
}
