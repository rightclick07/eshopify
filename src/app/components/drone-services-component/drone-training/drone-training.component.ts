import { Component } from '@angular/core';
@Component({
  selector: 'app-drone-training',
  templateUrl: './drone-training.component.html',
  styleUrls: ['./drone-training.component.css']
})
export class DroneTrainingComponent {
  droneTrainingData = [
    {
      title: 'Drone Pilot Training Program',
      paragraph1: 'Go Beyond and hone your pilot skills by harnessing our meritorious drone pilot training program to fulfill your drone dreams.',
      paragraph2: 'Uncover your potential, and let’s celebrate the quest of drones together!'
    },
    {
      title: 'Certified Instructors',
      paragraph1: 'Cruise through your drone ambitions with the promise of the best drone pilot training in India.',
      paragraph2: 'Our adept and qualified team of expert trainers strive to propel you to greater peaks.'
    },
    {
      title: 'DGCA Approved Training',
      paragraph1: 'Focused and valuable, our enhanced training of the imperative drone courses accelerates your learning process.',
      paragraph2: 'Approved by DGCA, our applauded drone pilot training and courses facilitate you towards a rewarding career path.'
    },
    {
      title: 'Training Certificate',
      paragraph1: 'Awarding a training certificate that elevates your conception of drone technology, our UAV pilot courses push the limits of your comprehension and knowledge.',
      paragraph2: ' A catalyst to your learning, we aspire to boost and augment your learning experience.',
    },
    {
      title: '100% Practical training',
      paragraph1: 'Unearth your ambitious passion for drone piloting with our thriving practicum and grounding.',
      paragraph2: 'Our expedient drone network amplifies your versatility in the space of drone technology and operations.'
    },
    {
      title: 'Job Oriented Course Syllabus',
      paragraph1: 'With our certified drone operating and flying courses, soak up the interesting nature of drones and their operations.',
      paragraph2: 'The effective courses, as taught by our dexterous trainers put you on a path to a glorious career.',
    },

    {
      title: 'Drone Pilot Network',
      paragraph1: 'Empowering you through your zealous drive for drone proficiency, we mold you towards an eminent and lucrative shape.',
      paragraph2: 'We aspire to achieve this with our ever-expansive network of drone pilots that are cherished for their work. Inspired by this, we offer our students the opportunity and experience to be employed in our drone pilot network and work closely with us.',

    },




  ];

  daysData = [
    {
      day: 'Day 1',
      topics: [
        'Regulations of DGCA, Civil Aviation Requirements',
        'Basic principles of flight',
        'Introduction to Multirotor',
        'Drone Equipment Maintenance'
      ]
    },
    {
      day: 'Day 2',
      topics: [
        'Final Test – Theory',
        'Introduction to Flight Simulator',
        'Flight simulator training',
        'Practical Flying with Instructor Supervision'
      ]
    },
    {
      day: 'Day 3',
      topics: [
        'Assembling of a custom drone',
        'Practical flying with instructor supervision'
      ]
    },
    {
      day: 'Day 4',
      topics: [
        'Practical flying with instructor / solo flying'
      ]
    }
  ];
}
