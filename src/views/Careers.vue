<template>
    <div class="page-container">
        <div class="row g-4 align-items-center careers-intro">
            <div class="col-sm-4 d-none d-md-block"></div>
            <div class="col-sm-4 d-none d-md-block"></div>
            <div class="col-sm-4">
                <heading class="heading-temp text-center">
                    <template v-slot:heading>
                        Careers at Risksis
                    </template>
                </heading>
                <text-block class="text-block">
                    <template v-slot:heading>
                        You’re what fascinates us most.
                    </template>
                    <template v-slot:paragraph>
                        Our employees are smart – but that’s not the only reason
                        they’re the most important factor in our company. The
                        people at
                        <span style="color: #0054aa; font-weight: bold;">
                            Risksis Technology Limited</span
                        >
                        possess an inimitable combination of intuition, joy, and
                        passion. Join us and be part of our network.
                    </template>
                </text-block>
            </div>
        </div>
        <hr style="margin: 3em 0;" />

        <div class="row g-4 justify-content-center">
            <div class="col-md-9">
                <heading>
                    <template v-slot:heading>
                        Our Vacancies
                    </template>
                </heading>
                <div class="accordion" id="vacancy-accordion">
                    <div
                        v-for="v in vacancies"
                        :key="v.id"
                        class="accordion-item"
                    >
                        <h2 class="accordion-header" :id="'heading-' + v.id">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="'#collapse-' + v.id"
                                aria-expanded="false"
                                :aria-controls="'collapse-' + v.id"
                            >
                                {{ v.title }}&nbsp;&nbsp;—&nbsp;&nbsp;<span
                                    style="font-size: 0.9em; font-weight: 400; color: gray;"
                                >
                                    Posted: {{ v.posted }}</span
                                >
                            </button>
                        </h2>
                        <div
                            :id="'collapse-' + v.id"
                            class="accordion-collapse collapse"
                            :aria-labelledby="'heading-' + v.id"
                            data-bs-parent="#vacancy-accordion"
                        >
                            <div class="accordion-body">
                                <p class="small" style="color: #5f5e5e;">
                                    <mdicon
                                        name="map-marker-outline"
                                        size="20"
                                    />
                                    {{ v.location }} |

                                    <mdicon name="bullseye-arrow" size="20" />
                                    {{ v.highlights }}
                                </p>

                                <br />

                                <p>
                                    <strong>Job type:</strong>
                                    {{ v.jobType }}
                                </p>

                                <p>
                                    <strong>Experience:</strong>
                                    {{ v.yearsExp }} years
                                </p>

                                <p>
                                    <strong>Position:</strong>
                                    {{ v.level }}
                                </p>

                                <hr class="horizontal" />
                                <heading>
                                    <template v-slot:heading>
                                        Responsibilities
                                    </template>
                                </heading>
                                <div
                                    class="p-text"
                                    v-for="res in v.responsibilities"
                                    :key="res"
                                >
                                    {{ res }}
                                </div>

                                <hr class="horizontal" />
                                <heading>
                                    <template v-slot:heading>
                                        Requirements
                                    </template>
                                </heading>
                                <div
                                    class="p-text"
                                    v-for="req in v.requirements"
                                    :key="req"
                                >
                                    {{ req }}
                                </div>

                                <hr class="horizontal" />
                                <heading>
                                    <template v-slot:heading>
                                        Benefits
                                    </template>
                                </heading>
                                <div
                                    class="p-text"
                                    v-for="b in v.benefits"
                                    :key="b"
                                >
                                    {{ b }}
                                </div>

                                <hr class="horizontal" />
                                <heading>
                                    <template v-slot:heading>
                                        Footnote
                                    </template>
                                </heading>
                                <div class="p-text">
                                    {{ v.footnote }}
                                </div>

                                <hr class="horizontal" />
                                <div
                                    class="p-text"
                                    style="color: #0054aa; font-weight: 500;"
                                >
                                    {{ v.contact }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Heading from '../components/Heading.vue'
import TextBlock from '../components/TextBlock.vue'

export default {
    components: { Heading, TextBlock },
    name: 'careers',
    data() {
        return {
            vacancies: [
                {
                    id: 'AJS-software',
                    title: 'Software Developer (AI system backend / Frontend)',
                    level: 'Senior',
                    yearsExp: '1-2',
                    jobType: 'Full Time, Permanent, Internship',
                    posted: '05 Sep 2021',
                    due: 'None',
                    location: 'Hong Kong Science Park',
                    highlights: 'C#, Java, Linux',
                    responsibilities: [
                        'System development and system design and analysis in Java/C++/C#/J2EE/Python',
                        'Software development of High Speed Server and System Development',
                        'Development in Enterprise System in Different Industries (Government, Banks, Telecom, Retail, Logistics, Manufacturing, Airline and more)'
                    ],
                    requirements: [
                        'Strong in Java/C++/C#/J2EE/ or Python',
                        'Experience in Linux/Unix is an advantage',
                        'Experience in database and enterprise system development',
                        'Proficient in OO concept',
                        'Passion in building high-speed and high performance server',
                        'Passion in producing large-scale systems',
                        'High Speed Multi-Threading Technology is advantageous'
                    ],
                    benefits: [
                        'Attractive remunerations will be offered to the successful candidates',
                        'Excellent opportunity to further develop your professional skills'
                    ],
                    footnote:
                        'Smart Student Placement Intern will also be considered and candidate with more experience will be considered as Senior/Team lead role.',
                    contact:
                        'If you are interested, please send your resume by applying in Jobsdb. Or contact us at 60516869.'
                },
                {
                    id: 'AJS-data',
                    title: 'Data Analyst (AI system backend / Frontend)',
                    level: 'Junior',
                    yearsExp: '1',
                    jobType: 'Full Time, Permanent, Internship',
                    posted: '05 Sep 2021',
                    due: 'None',
                    location: 'Hong Kong Science Park',
                    highlights: 'C#, Java, Linux',
                    responsibilities: [
                        'System development and system design and analysis in Java/C++/C#/J2EE/Python',
                        'Software development of High Speed Server and System Development',
                        'Development in Enterprise System in Different Industries (Government, Banks, Telecom, Retail, Logistics, Manufacturing, Airline and more)'
                    ],
                    requirements: [
                        'Strong in Java/C++/C#/J2EE/ or Python',
                        'Experience in Linux/Unix is an advantage',
                        'Experience in database and enterprise system development',
                        'Proficient in OO concept',
                        'Passion in building high-speed and high performance server',
                        'Passion in producing large-scale systems',
                        'High Speed Multi-Threading Technology is advantageous'
                    ],
                    benefits: [
                        'Attractive remunerations will be offered to the successful candidates',
                        'Excellent opportunity to further develop your professional skills'
                    ],
                    footnote:
                        'Smart Student Placement Intern will also be considered and candidate with more experience will be considered as Senior/Team lead role.',
                    contact:
                        'If you are interested, please send your resume by applying in Jobsdb. Or contact us at 60516869.'
                }
            ]
        }
    }
}
</script>

<style scoped>
@media (max-width: 768px) {
}
.heading-temp {
    color: white;
}

@media (max-width: 768px) {
    .heading-temp {
        padding-left: 0.1em;
        text-align: right;
    }
}

.careers-intro {
    height: 660px;
    padding: 0 2em;
}

.text-block {
    border: 0;
}

.accordion-button {
    font-weight: 500;
    font-size: 0.5em;
    color: #585858;
}

.accordion-button:focus {
    outline: none;
    box-shadow: none;
    color: #2c3e50;
}

.selected {
    font-size: 0.9em;
}

p {
    margin-top: 0;
    margin-bottom: 0.4rem;
}

.p-text {
    padding: 0.2em 0;
}

.horizontal {
    color: rgb(210 210 210);
}
</style>
