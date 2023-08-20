import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';

import { map, Observable, shareReplay, startWith } from 'rxjs';
import { UserProfile } from 'src/app/shared/model/UserProfile';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  FullName:any;
  isUserLoggedIn:boolean=false;
  cartArray:any[]=[];
  cartItemCount=0;
  productList:any;
  filteredProductList:any;
  showSearchIcon = true;

  category=[
  {
    title: "Drone",
    subCategory: [
      {
        id:1,
        title:"Nano Drone",
        icon:"",
      },
      {
        id:2,
        title:"Micro Drone",
        icon:"",
      },
      {
        id:3,
        title:"Enterprise Drone",
        icon:"",
      },
      {
        id:4,
        title:"Toy Drone",
        icon:""
      }
    ]
  },
  {
    title:"Services",
    url:"assets/img/utility/drone-service.png",
    subCategory:[
      {
        id:1,
        title:"Rent a Drone",
        icon:"",
        products:[]
      },
      {
        id:2,
        title:"Drone Repair",
        icon:"",
        products:[]
      },
      {
        id:3,
        title:"Drone Training",
        icon:"",
        
      },
      {
        id:4,
        title:"Get Your UIN",
        icon:"",
        
      },
      {
        id:4,
        title:"Drone Piolet License",
        icon:"",
        
      }
    ]
    },
    {
      title:"Camera",
      url:"assets/img/utility/camera.png",
      subCategory:[
        {
          id:1,
          title:"Action Camera",
          icon:"",
        },
        {
          id:2,
          title:"DSLR",
          icon:""
        },
        {
          id:3,
          title:"Gimbles",
          icon:""
        },
      ]
      },
  
      {
      title:"Gaming",
      url:"assets/img/utility/gaming.png",
      subCategory:[
        {
          id:1,
          title:"XBOX",
          icon:""
        },
        {
          id:2,
          title:"VR Headsets",
          icon:""
        },
        {
          id:3,
          title:"Play Stations",
          icon:""
        },
      ]
      },
  ]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(
    private breakpointObserver: BreakpointObserver,
    private router:Router,
    public authService:AuthService ,
    private productService:ProductService,
    private toastService:ToastService ,
    private cartService:CartService,
    private spinnerService:SpinnerService
) {
  this.authService.isLoggedIn.subscribe(res=>{
    this.isUserLoggedIn=res;
    console.log(res);
    
  })

}
  showSocialForMobile=false;
  showSocialForweb=true;
  myControl = new UntypedFormControl();
  categoryList = [ 
    {
      title:"Drone",
      routeUrl: 'ai',
    },
    {
      title:"Camera",
      routeUrl: 'ai',
    }, 
    ];
    companyMenuList = [
      {
        title:"About Us",
        routeUrl:"about-us",
        icon:"info"
      },
      {
        title:"Contact Us",
        routeUrl:"contact-us",
        icon:"call"
      },
      {
        title:"Career",
        routeUrl:"career",
        icon:"flag"
      }
      ];
      userProfileMenuList = [
        {
          title:"Profile",
          routeUrl:"user-profile",
          icon:"person_add"
        },
        {
          title:"Logout",
          routeUrl:"",
          icon:"exit_to_app"
        }
        ];
  options: string[] = [];
  filteredOptions: Observable<string[]> = new Observable<string[]>();
  selectedVal:any
  profile!: UserProfile[];
  badgeClass!: string;
  token:string="";
  initial:string="";
  ngOnInit() {
    if(localStorage.getItem("token")){
      this.isUserLoggedIn=true
    }
    console.log( this.isUserLoggedIn+"this.isUserLoggedIn");

    this.getProductOptions();
    console.log(this.options,"this.options");

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
   let username=localStorage.getItem("username")   
   this.token="";
   this.initial=this.getInitial(username!) 
   let user=this.getUserName(username!)
   this.badgeClass=this.generateBadgeClass()

    this.profile=[
      {
        name:'option 1',
        code:user,
        badge:this.badgeClass
      },
      // {
      //   name:'option 2',
      //   code:'Change Password'
      // },
      {
        name:'option 2',
        code:"Account",
      },
      {
        name:'option 3',
        code:'Logout'
      }
    ]

    this.cartService.getProduct().subscribe(res=>{
      console.log(res);
     this.cartArray=res;
     console.log(this.cartArray);
     
      this.cartItemCount=this.cartArray.length;
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(this.options,"this.option23s");
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  OnSearchCourse(element:string){
     let routeString=""
    for(let key of this.categoryList){
        if(key.title==element){
         routeString=key.routeUrl
        }
    }
    this.router.navigateByUrl(routeString)
  }
  getUserName(username:string){
    let userNameArr=username?.split('.').map((elt:string)=>{
      return elt?.charAt(0).toUpperCase() + elt?.substr(1).toLowerCase()
    })
    return userNameArr?.join(' ')
  }
  getInitial(username:string){
    return username?.charAt(0).toUpperCase();
  }

  generateBadgeClass(){
    let badgeClasses=["primary","accent","warn"]
    let badgeIndex:number=Math.floor(Math.random()*4);
    let badgeClass=badgeClasses[badgeIndex]
    return badgeClass;
  }

  captureOnChange(){
    switch(this.selectedVal){

      case 'Change Password':
        break;

      case 'Account':
        break;

      case 'Logout':
       // this.logout() 
        break; 
       
       default:
        this. router.navigate(['/home']);
        break;
    }
  }


  OnclickProfile(key:string){

    if(key=="Logout"){
      localStorage.clear();
      this.isUserLoggedIn=false;
      this.router.navigate(["/login"])
    }else if(key=="Account")
    {  
      this.router.navigate(["/account"])
    }
  }


  opencart(){
    this.router.navigate(["/cart"])
  }

  getProductOptions(){
    this.productService.getAllProductList().subscribe((res:any)=>{
      if(res){
        this.productList=res?.payload
        for(let key of res?.payload){    
          this.options.push(key.name)
        }
        console.log("his.options"+this.options);
        
      }    
   })
  }

  onOptionSelected($event:any){
       console.log("event",$event?.option?.value);
       for(let key of this.productList){ 
            if(key.name==$event?.option?.value){
              this.router.navigate(["product-details",key?.id])
            }
        }
  }
  selectedCategories: boolean[] = new Array(this.category.length).fill(false);

  toggleSubcategories(index: number) {
    this.selectedCategories[index] = !this.selectedCategories[index];
  }

  isCategorySelected(index: number): boolean {
    return this.selectedCategories[index];
  }
onClickCategory(searchString:string){
  const obj=this.searchCategoryFromList(searchString)
  console.log("obj",obj);
  const categoryString=obj?.category?.title;
  const subCategoryString=obj?.subCategory[0].title;
  this.spinnerService.show()
   this.productService.getProductByCategorySubcategory(categoryString,subCategoryString).subscribe(
    res=>{
      if(res){
        this.spinnerService.hide();
        this.filteredProductList=res?.payload
        const queryParams = { data: JSON.stringify(this.filteredProductList) };
        this.router.navigate(['/filter-product'], { queryParams });
      }
    }
   )
  
}
  searchCategoryFromList(searchString: string): { category: any, subCategory: any[] } | null {
    searchString = searchString.toLowerCase(); // Convert search string to lowercase
  
    for (const cat of this.category) {
      const matchingSubCategory = cat.subCategory.find(subCat =>
        subCat.title.toLowerCase().includes(searchString)
      );
      
      if (matchingSubCategory) {
        return {
          category: cat,
          subCategory: [matchingSubCategory]
        };
      }
    }
  
    return null;
  }
  
}
