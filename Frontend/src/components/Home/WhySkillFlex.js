import React from 'react'

export default function WhySkillFlex() {
    return (
        <>
            <div className="container">
                <h1 className="heading-name " style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '15px' }}>
                    <strong className="main-name display-4 fst-italic" style={{ paddingTop: '50px', textAlign: 'center' }}> Why SkillFlex!!!??</strong>
                </h1>

                <div className="box" style={{paddingTop:30}}>
                    <div className="d-flex">
                        <div className="col-md-6 shadow p-3 mb-5 bg-body rounded me-3">
                            <h4>Hands-On Experience Certifications</h4>
                            <p>Earn a certificate that validates your hands-on experience in building complete projects</p>
                        </div>
                        <div className="col-md-6 shadow p-3 mb-5 bg-body rounded">
                            <h4>Round-the-Clock Mentorship</h4>
                            <p>Benefit from invaluable mentorship to tap into years of experience.</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="col-md-6 shadow p-3 mb-5 bg-body rounded me-3">
                            <h4>Navigating the Path of Lifelong Learning</h4>
                            <p>Learning is the transformative journey from curiosity to competence </p>
                        </div>
                        <div className="col-md-6 shadow p-3 mb-5 bg-body rounded">
                            <h4>Hands-On Experience with Real Projects</h4>
                            <p>Gain hands-on experience by building real projects from scratch in a real-world environment</p>
                        </div>
                    </div>
                </div>

                <h1 style={{ paddingBottom: 15, fontSize: 20,textAlign:'center', paddingLeft:30 }} className="display-1">
                    So, whether you’re a student seeking mentorship or an industry enthusiast hungry for knowledge, SkillFlex welcomes you. Let’s build, learn, and create together!!!
                </h1>
            </div>
        </>

        
    )
}
