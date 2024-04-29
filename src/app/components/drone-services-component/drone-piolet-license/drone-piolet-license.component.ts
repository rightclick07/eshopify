import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-drone-piolet-license',
  templateUrl: './drone-piolet-license.component.html',
  styleUrls: ['./drone-piolet-license.component.css']
})
export class DronePioletLicenseComponent {

  courses = [
    {
      title: 'DGCA Drone Pilot Training Course',
      description: 'Get the necessary knowledge and skills to become a certified drone pilot.',
      imageUrl: ''
    },
    {
      title: ' Drone Repairing/Technician Course',
      description: 'Learn to get a job in drone industry, covering assembly, repairs, quality control, and parts manufacturing.',
      imageUrl: 'assets/img/banners/course-2.png'
    },

    {
      title: 'Drone Mapping, Survey, and Inspection Course',
      description: 'Get the necessary knowledge and skills to become a certified drone pilot.',
      imageUrl: 'assets/img/banners/course-3.png'
    },
    {
      title: ' Drones in Agriculture Course',
      description: 'learn how to use drone for crop monitoring, mapping, spraying and harvesting.',
      imageUrl: 'assets/img/banners/course-5.png'
    },
    {
      title: 'Drone Workshop for School Students',
      description: 'This workshop sparks young students’ interest in drones and fosters future innovations.',
      imageUrl: 'assets/img/banners/course-4.png'
    },



  ];

  everselist = [

    {
      title: ' Best-in-class infrastructure',
      description: 'Classroom, Cutting –edge-simulators, Flying Zone, Library, Lab, Best-in-class drones and many more',
      imageUrl: 'assets/img/banners/whyeverse-1.png'
    },

    {
      title: 'Trained and experienced tutors',
      description: 'Ex-Army veteran with over 30 yrs of experience. DGCA certified instructors – With a vast knowledge & experience. We focus on personalised attention',
      imageUrl: 'assets/img/banners/whyeverse-2.png'
    },
    {
      title: 'Comprehensive curriculum',
      description: 'Aerodynamics, Regulatory compliance, drone basics, simulation, practical flying classes, record keeping – To ensure that you can master flight maneuvers',
      imageUrl: 'assets/img/banners/whyeverse-3.png'
    },
    {
      title: 'Industry experts',
      description: 'Neosky team has industry veterans who have built drone start-ups from scratch. We provide networking opportunities with the NeoSky and The Rattanindia group.',
      imageUrl: 'assets/img/banners/whyeverse-4.png'
    },
    {
      title: 'Career counselling',
      description: 'Sharing insights, to make you industry-ready',
      imageUrl: 'assets/img/banners/whyeverse-5.png'
    },
    {
      title: 'Finacing',
      description: 'Neosky facilitates EASY EMI options to make the drone RPTO course more affordable',
      imageUrl: 'assets/img/banners/whyeverse-6.png'
    },
  ];
  eversecontent = [
    {
      imagePath: '',
      title: 'DGCA Drone Pilot Training Course',
      description: 'Whether you’re a beginner looking to explore the exciting world of Drones or an experienced pilot seeking advanced skills, we got it all covered. This course is designed to provide the necessary knowledge & skills to become a certified drone pilot in India and make you industry ready.',
    },
    {
      imagePath: '/assets/img/banners/c2.png',
      title: 'Drone Repairing/Technician Course',
      description: 'The course would help the technician pickup jobs at various drone companies or even work as repair technicians at various drone hubs. Post the course students can join the drone industry and would be able to handle assembly, repairs, wiring, parts manufacturing or take care of entire assembly flow etc.',
    },
    {
      imagePath: '/assets/img/banners/c3.png',
      title: 'Drone Mapping, Survey and Inpection Course',
      description: 'This course introduces the fundamentals of drone mapping and surveying, including the types of drones, sensors, software, and applications used in this field. You will learn how to plan, execute, and process drone surveys for various purposes, such as land management, environmental monitoring, construction, and archaeology.'
    },
    {
      imagePath: '/assets/img/banners/c4.png',
      title: 'Drone in agriculture course',
      description: 'This course introduces the basics of drone technology and its applications in agriculture. You will learn how to operate, maintain and troubleshoot drones, as well as how to use them for crop monitoring, mapping, spraying and harvesting. You will also learn about the legal and ethical aspects of drone use, as well as the best practices for safety and efficiency.'
    },
    {
      imagePath: '/assets/img/banners/c5.png',
      title: 'Drone Workshop for School Students',
      description: 'This course introduces the fundamentals of drone mapping and surveying, including the types of drones, sensors, software, and applications used in this field. You will learn how to plan, execute, and process drone surveys for various purposes, such as land management, environmental monitoring, construction, and archaeology.'
    },


  ]

  faqItems = [
    {
      question: 'What is a Remote Pilot Certificate (RPC)??',
      answer: 'A Remote Pilot Certificate is equivalent to a drivers license for a car. To fly any of the Drones commercially it is necessary to have an RPC. It will be term illegal if you fly a drone without a Remote Pilot Certificate.'
    },
    {
      question: 'Where is your institute located?',
      answer: 'Our Remote Pilot Training Organization is in Bengaluru. We are in plans to expand PAN India soon.'
    },
    {
      question: 'What are the diverse types of courses you offer?',
      answer: 'Currently, we offer industry specific market ready courses as below: a. DGCA Approved Drone Pilot Training b. Drone Technician Course c. Drones in Agriculture Course d. Mapping, Survey, and Inspection Course e. Drones-based workshop for school students We can also customize the courses in accordance with your needs.'
    },

    {
      question: 'What is the duration of the courses?',
      answer: 'Our courses range from 5-7 days.'
    },

    {
      question: 'What are the eligibility criteria for the courses?',
      answer: 'In general, one needs to be 18 years and above to attend the DGCA certification. For other courses, we can accommodate on a case-to-case basis.'
    },

    {
      question: 'Are you approved by DGCA?',
      answer: 'Yes, Everse is approved by DGCA.'
    },

    {
      question: 'Do you offer placements?',
      answer: 'Yes, we do offer 100% placements assistance and we mean it. Infact, any of the candidates who have come to do the training and is looking for a job did get a job.'
    },

    {
      question: 'What is the average salary of a Drone Pilot?',
      answer: 'The average salary for a Drone Pilot is 25000 – 30000 with a quick increase with the number of years of experience'
    },

    {
      question: 'When does the training start?',
      answer: 'Our training starts every week Monday – Friday for all the courses. Contact us immediately for expert advice and booking your slot.'
    },

  ]
  showForm: boolean = false;
  dronePioletLicenseForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.dronePioletLicenseForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^((\+91-?)|0)?[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(40)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  submitForm() {
    if (this.dronePioletLicenseForm.valid) {
      console.log('drone Piolet License Form Data', this.dronePioletLicenseForm.value);
      this.snackBar.open('Your Comment is submitted', 'Close', {
        duration: 3000
      });

      this.dronePioletLicenseForm.reset();
      // window.location.reload();
    } else {
      console.error('Form is invalid. Please fill in all required fields.');
      alert('Form is invalid. Please fill in all required fields.');
    }
  }

  cancelForm() {
    this.showForm = false;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
