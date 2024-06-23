import React from 'react'
import TrainerCourse from '../components/TrainerCourse'
import image from '../assets/images/multimedia-courses-scope-and-career 1.png'
import image2 from '../assets/images/BA-Courses 1.png'
import image3 from '../assets/images/c_7_free_google_courses_become_machine_learning_engineer_1 1.png'
import image4 from '../assets/images/course__cs101_courses_datastructuresfromctopython__course-promo-image-1653540139 1.png'
import FormDialog from '../components/admin/AddCourseDialog'



function AdminCoursesPage() {
    return (
        <div className='flex flex-col'>
        <FormDialog/>
        <div className='grid grid-cols-3 gap-y-10'>
            <TrainerCourse image={image} name={'Multimedia'} />
            <TrainerCourse image={image2} name={'Soft skills'} />
            <TrainerCourse image={image3} name={'ML Google'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
            <TrainerCourse image={image4} name={'CS101'} />
        </div>
        </div>
    )
}

export default AdminCoursesPage
