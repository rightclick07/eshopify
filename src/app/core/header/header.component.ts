import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';

import { map, Observable, shareReplay, startWith } from 'rxjs';
import { UserProfile } from 'src/app/shared/model/UserProfile';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage/token-storage.service';
import { ToolbarService } from 'src/app/shared/services/toolbar/toolbar.service';

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
  isAdmin:boolean=false;
  searchMode: boolean = false;
  @ViewChild('searchbar') searchbar!: ElementRef;
  searchText = '';

  toggleSearch: boolean = false;
  id:any;
  category = [
    {
      title: "Drone",
      subCategory: [
        {
          id: 1,
          title: "Consumer Drone",
          icon: "",
          routeurl: "",
        },
        {
          id: 2,
          title: "Enterprise Drone",
          icon: "",
          routeurl: "",
        },
        {
          id: 3,
          title: "Agricultural Drone",
          icon: "",
          routeurl: "",
        },
        {
          id: 4,
          title: "Thermal Drone",
          icon: "",
          routeurl: "",
        },
        {
          id: 5,
          title: "Toy Drone",
          icon: "",
          routeurl: "",
        }
      ]
    },
    {
      title: "Services",
      url: "assets/img/utility/drone-service.png",
      subCategory: [
        {
          id: 1,
          title: "Rent a Drone",
          icon: "",
          routeurl: "/drone-rent",
          products: []
        },
        {
          id: 2,
          title: "Drone Repair",
          icon: "",
          routeurl: "/drone-repair",
          products: []
        },
        {
          id: 3,
          title: "Drone Training",
          icon: "",
          routeurl: "/drone-training",
        },
        {
          id: 4,
          title: "Get Your UIN",
          icon: "",
          routeurl: "/drone-get-uin"
 
        },
        {
          id: 5,
          title: "Drone Piolet License",
          icon: "",
          routeurl: "/drone-piolet-license"
        }
      ]
    },
    {
      title: "Camera",
      url: "assets/img/utility/camera.png",
      subCategory: [
        {
          id: 1,
          title: "Action Camera",
          icon: "",
          routeurl: "",
        },
        {
          id: 2,
          title: "DSLR",
          icon: "",
          routeurl: "",
        },
        {
          id: 3,
          title: "Gimbles",
          icon: "",
          routeurl: "",
        },
      ]
    },
 
    {
      title: "Gaming",
      url: "assets/img/utility/gaming.png",
      subCategory: [
        {
          id: 1,
          title: "XBOX",
          icon: "",
          routeurl: "",
        },
        {
          id: 2,
          title: "VR Headsets",
          icon: "",
          routeurl: "",
        },
        {
          id: 3,
          title: "Play Stations",
          icon: "",
          routeurl: "",
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
    private spinnerService:SpinnerService,
    public  toolbarService:ToolbarService,
    private route:ActivatedRoute
) {
  this.authService.isLoggedIn.subscribe(res=>{
    this.isUserLoggedIn=res;
    console.log(res,"response");
  })
 this.togglemaintoolbar();

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
    this.togglemaintoolbar();
    if(localStorage.getItem("username")){
      this.isUserLoggedIn=true
      this.getUserDetail();
    }

    // console.log( this.isUserLoggedIn+"this.isUserLoggedIn");

    this.getProductOptions();

    // console.log(this.options,"this.options");

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
        badge:this.badgeClass,
        icon:'verified_user'
      },
      // {
      //   name:'option 2',
      //   code:'Change Password'
      // },
      {
        name:'option 2',
        code:"Account",
        icon:"account_circle"
      },
      {
        name:'option 3',
        code:'Logout',
        icon:"logout"
      }
    ]

    this.cartService.getProduct().subscribe(res=>{
      // console.log(res);
     this.cartArray=res;
     console.log(this.cartArray);

    //  console.log(this.cartArray);

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
        // console.log("his.options"+this.options);

      }
   )
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
  // console.log("obj",obj);
  const categoryString=obj?.category?.title;
  console.log("categoryString",categoryString);
  const subCategoryString=obj?.subCategory[0].title;
  console.log("subCategoryString",subCategoryString);
  this.spinnerService.show()
   this.productService.getProductByCategorySubcategory(categoryString,subCategoryString).subscribe(
    res=>{
      if(res){
        this.spinnerService.hide();
        this.filteredProductList=res?.payload
        const queryParams = { data: JSON.stringify(this.filteredProductList) };
        if(subCategoryString=='Drone Repair'){
          console.log("categoryString",categoryString); 
          this.router.navigate(['/drone-repair']);
         }else if(subCategoryString=='Rent a Drone'){
          this.router.navigate(['/drone-rent']);
         }else if(subCategoryString=='Drone Training'){
          this.router.navigate(['/drone-training']);
         }else if(subCategoryString=='Drone Piolet License'){
          this.router.navigate(['/drone-piolet-license']);
         }else if(subCategoryString=='Get Your UIN'){
          this.router.navigate(['/drone-get-uin']);
         }
         else{
          this.router.navigate(['/filter-product',subCategoryString]);
         }
        
      }
    }
    
   );
   

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

  getUserDetail(){
    this.authService.getUserById().subscribe(res=>{
      if(res){
        if(res?.payload?.role=="admin"){
          this.isAdmin=true
        }
      }

    })
  }
  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }
  
  goToSearchPage() {
    this.toolbarService.setShowMainToolbar(false);
    this.toolbarService.setShowSearchToolbar(true)
    this.router.navigate(['/search']); 
    this.searchbar.nativeElement.focus();
   
  }
  togglemaintoolbar(){
    this.route.params.subscribe(params => {
      this.id = params['id'];})
    if(this.id=='search'){
      this.toolbarService.setShowMainToolbar(false);
    }else{
      this.toolbarService.setShowMainToolbar(true);
    }
  }

  onClickServices(routeurl: string) {
    this.router.navigate([routeurl])
  }
}
