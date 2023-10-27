# Angular Reference Sheet

- [Components](#components)
    - [Lifecycle](#lifecycle)
        - [ngOnChanges](#1-ngonchanges)
        - [ngOnInit](#2-ngoninit)
        - [ngDoCheck](#3-ngdocheck)
        - [ngAfterContentInit](#4-ngaftercontentinit)
        - [ngAfterContentChecked](#5-ngaftercontentchecked)
        - [ngAfterViewInit](#6-ngafterviewinit)
        - [ngAfterViewChecked](#7-ngafterviewchecked)
        - [ngOnDestroy](#8-ngondestroy)
- [Data Binding](#data-binding)
    - [String Interpolation](#1-string-interpolation)
    - [Property Binding](#2-property-binding)
    - [Event Binding](#3-event-binding)
        - [$event](#event)
    - [Two-Way Binding - [(ngModel)]](#4-two-way-binding---ngmodel)
    - [@Input()](#input)
    - [@Output()](#output)
    - [Template Reference](#template-reference)
        - [@ViewChild](#viewchild)
    - [ng-content](#ng-content)
        - [@ContentChild()](#contentchild)
- [Directives](#directives)
    - [ngIf](#ngif)
    - [ngStyle](#ngstyle)
    - [ngClass](#ngclass)
    - [ngFor](#ngfor)
    - [ngSwitch](#ngswitch)
    - [Custom Directives](#custom-directives)
        - [Custom Attribute Directives](#custom-attribute-directives)
        - [Custom Structural Directives](#custom-structural-directives)
- [Services](#services)
- [Routing](#routing)
    - [Add a route](#add-a-route)
    - [Display the routed component](#display-the-routed-component)
    - [Route in HTML](#route-in-html)
        - [Absolute Paths](#absolute-paths)
        - [Relative Paths](#relative-paths)
    - [Active Router Styling](#active-router-styling)
    - [Route in TypeScript](#route-in-typescript)
        - [Absolute Paths](#absolute-paths-1)
        - [Relative Paths](#relative-paths-1)
    - [Route Parameters](#route-parameters)
    - [Query Parameters](#query-parameters)
    - [Nested Routing](#nested-routing)
    - [Preserving or Merging Query Parameters when navigating to sub-paths](#preserving-or-merging-query-parameters-when-navigating-to-sub-paths)
    - [Redirecting and Wildcard Route](#redirecting-and-wildcard-route)
    - [Route Guards](#route-guards)
        - [CanActivate](#canactivate)
        - [CanActivateChild](#canactivatechild)
        - [CanDeactivate](#candeactivate)
    - [Passing Static Data to a Route](#passing-static-data-to-a-route)
    - [Resolving Dynamic Data](#resolving-dynamic-data)
- [Observables](#observables)
    - [Creating a Custom Observable](#creating-a-custom-observable)
    - [Subscribing to an Observable](#subscribing-to-an-observable)
    - [Unsubscribing from an Observable](#unsubscribing-from-an-observable)
    - [Using Operators with Observables](#using-operators-with-observables)
    - [Subjects](#subjects)


## Components

### Lifecycle

The lifecycle of an Angular component refers to the sequence of events that occur from the creation of the component to its destruction. Angular components have a series of lifecycle hooks that developers can tap into to perform actions at specific stages of a component's life.
 
Note: Lifecycle hooks are called after the `constructor()` has been called.

#### 1. ngOnChanges

Called after `@Input` property changes.

``` typescript
  @Input() inputData1 = "";
  
  ngOnChanges(changes: SimpleChanges): void {
    for (let changedInput in changes)
    {
      let changedProperty = changes[changedInput];
      let before  = JSON.stringify(changedProperty.previousValue);
      let after = JSON.stringify(changedProperty.currentValue);
    }
  }
```

#### 2. ngOnInit

Called once the component is initialized.

``` typescript
  ngOnInit() {
  
  }
```

#### 3. ngDoCheck

Called during every change detection run.

``` typescript
  ngDoCheck() {
    
  }
```

#### 4. ngAfterContentInit

Called after `ng-content` has been projected into the view.

``` typescript
  ngAfterContentInit() {
  
  }
```

#### 5. ngAfterContentChecked

Called every time the projected content has been checked.

``` typescript
  ngAfterContentChecked() {
  
  }
```

#### 6. ngAfterViewInit

Called after the component's view and all child views have been initialized.

``` typescript
  ngAfterViewInit() {
  
  }
```

#### 7. ngAfterViewChecked

Called after the component's view and all child views have been checked.

``` typescript
  ngAfterViewChecked() {
  
  }
```

#### 8. ngOnDestroy

Called once the component is about to be destroyed.

``` typescript
  ngOnDestroy() {
  
  }
```

## Data Binding

Data binding in Angular refers to the automatic synchronization of data between the model (component) and the view (template) components.

### 1. String Interpolation

Binding data values as strings directly into the template.

In HTML:

``` angular2html
<p>String Interpolation: My name is {{ myName }}</p>
<p>String Interpolation: Function says {{ HelloWorld() }}</p>
```

In TypeScript:

``` typescript
  myName: string = "Arunam Gupta.";

  HelloWorld(): string {
    return "Hello World!";
  }
```

### 2. Property Binding

Binding data from a component to a property of a DOM element.

In HTML:

``` angular2html
<p [innerText]="propertyBindingText"></p>
```

In TypeScript:

``` typescript
propertyBindingText: string = "This text was inserted into the <p> element using Property Binding.";
```

### 3. Event Binding

Binding methods from a component to DOM events to handle user interactions.

In HTML:

``` angular2html
<button (click)="eventBindingFunction()">Click to change the text below using a function.</button>

<button (click)="eventBindingText='The button was reset.'">Reset the text below
  using in-line TypeScript code.</button>

<p>{{ eventBindingText }}</p>
```

In TypeScript:

``` typescript
  eventBindingText: string = "The button has not yet been clicked.";

  eventBindingFunction(): void {
    this.eventBindingText = "The button was clicked!";
  }
```

#### $event

A special variable in Angular event bindings that captures and provides access to the event object emitted by the DOM event.

In HTML:

``` angular2html
<p (click)="dollarEvent($event)">Click this text to highlight it</p>
```

In TypeScript:

``` typescript
  dollarEvent(event: Event) {
    const element = event.target as HTMLElement;
    if (element.style.color === 'red' && element.style.background === 'yellow') {
      // If already highlighted, remove the highlighting
      element.style.color = '';
      element.style.background = '';
    } else {
      // If not highlighted, add highlighting
      element.style.color = 'red';
      element.style.background = 'yellow';
    }
  }
```

### 4. Two-Way Binding - [(ngModel)]

Binding both the property and event together for real-time updates between the component and the view.

In HTML:

``` angular2html
<p>{{ ngModelText }}</p>
<input [(ngModel)]="ngModelText" type="text">
```

In TypeScript:

``` typescript
ngModelText: string = "Two way binding.";
```

### @Input()

**Reference: [atInput-atOutput](Angular-Code/src/app/data-binding/atInput-atOutput)**

Decorator used to pass data into a component.

### @Output()

**Reference: [atInput-atOutput](Angular-Code/src/app/data-binding/atInput-atOutput)**

Decorator used to emit custom events from a component.

### Template Reference

A way to refer to a DOM element or a directive in a template.

In HTML:

``` angular2html
<p #templateReference>This 'p' element has 'templateReference' tag.</p>
<p>{{ templateReference }}</p>
<p>{{ templateReference.innerText }}</p>
```

#### @ViewChild

Decorator used to access a child component or directive from a parent component.

In HTML:

``` angular2html
<p #viewChildTemplateReference>This 'p' element has 'viewChildTemplateReference' tag and will be assigned to 'viewChildVariable'.</p>
<p>{{ viewChildVariable }}</p>
<p>{{ viewChildVariable.nativeElement }}</p>
<p>{{ viewChildVariable.nativeElement.innerText }}</p>
```

In TypeScript:

``` typescript
@ViewChild('viewChildTemplateReference', {static: true}) viewChildVariable!: ElementRef;
```

### ng-content

**Reference: [ngContent-atContentChild](Angular-Code/src/app/data-binding/ngContent-atContentChild)**

A placeholder in a component's template that allows the insertion of content from the parent component.

#### @ContentChild()

**Reference: [ngContent-atContentChild](Angular-Code/src/app/data-binding/ngContent-atContentChild)**

Decorator used to access a content child component or directive from a parent component.

## Directives

Directives are markers on a DOM element that tell Angular to attach a specific behavior to that element or transform the DOM structure and appearance.

### ngIf

A structural directive that conditionally includes or excludes a template based on an expression.

In HTML:

``` angular2html
<p *ngIf="booleanVariable; else templateElement">This text is shown only if 'booleanVariable' is True.</p>
<ng-template #templateElement>
  <p>This text is shown only if 'booleanVariable' is False.</p>
</ng-template>
```

In TypeScript:

``` typescript
booleanVariable: boolean = true;
```

### ngStyle

A directive to set inline styles dynamically based on the component's state.

In HTML:

``` angular2html
<p [ngStyle]="{background: 'red', color: 'white'}">Styling in-line using ngStyle.</p>
<p [ngStyle]="newStyle">Styling by inserting the styles through TypeScript variable.</p>
```

In TypeScript:

``` typescript
newStyle = {background: 'lightblue', color: 'red'};
```

### ngClass

A directive to add or remove CSS classes dynamically based on the component's state.

In HTML:

``` angular2html
<p [ngClass]="{'style1': true, 'style2': style2Condition}">This text is styled using multiple classes and
  applied through ngClass.</p>
```

In TypeScript:

``` typescript
style2Condition: boolean = true;
```

In CSS:

``` css
.style1 {
  background-color: yellow;
}

.style2 {
  color: red;
}
```

### ngFor

A structural directive to iterate over a list of items.

In HTML:

``` angular2html
<p *ngFor="let person of listOfNames; let i = index">{{ i }} : {{ person.name }} is {{ person.age }} years old.</p>

<!--Using a Table-->
<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let person of listOfNames">
    <td>{{ person.name }}</td>
    <td>{{ person.age }}</td>
  </tr>
  </tbody>
</table>
```

In TypeScript:

``` typescript
  listOfNames = [
    {"name": "John", "age": 30},
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 35},
    {"name": "Eva", "age": 28},
    {"name": "David", "age": 40}
  ];
```

### ngSwitch

A directive used for conditional rendering based on the value of an expression.

In HTML:

``` angular2html
<div [ngSwitch]="switchValue">
  <p *ngSwitchCase="0">This text is displayed if 'switchValue' is 0.</p>
  <p *ngSwitchCase="5">This text is displayed if 'switchValue' is 5.</p>
  <p *ngSwitchCase="10">This text is displayed if 'switchValue' is 10.</p>
  <p *ngSwitchDefault>This text is displayed if 'switchValue' is anything other than 0, 5 or 10.</p>
</div>
```

In TypeScript:

``` typescript
switchValue: number = 0;
```

### Custom Directives

**Reference: [custom-directives](Angular-Code/src/app/directives/custom-directives)**

User-defined directives to extend the behavior of elements in the DOM.

#### Custom Attribute Directives

**Reference: [custom-attribute-directives](Angular-Code/src/app/directives/custom-directives/custom-attribute-directives)**

Renderer: A service in Angular to perform low-level DOM manipulations in a way that is safe to use in any environment.

@HostBinding: Decorator to bind a host element property in a custom directive.

@HostListener: Decorator to subscribe to events of the host element in a custom directive.

#### Custom Structural Directives

**Reference: [custom-structural-directives](Angular-Code/src/app/directives/custom-directives/custom-structural-directives)**

User-defined directives that modify the structure of the DOM by adding, removing, or manipulating elements based on specified conditions.

## Services

**Reference: [services](Angular-Code/src/app/services)**

Services are reusable components that provide shared business logic, data, or functionality across different parts of an application.

## Routing

### Add a route

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home", component: HomeComponent}
];
```

### Display the routed component

In `app.component.html`:

``` html
<router-outlet><router-outlet>
```

### Route in HTML

#### Absolute Paths

Absolute paths start with a `/`

``` html
<a routerLink="/home">Home</a>
<a routerLink="['/home']">Home</a>
```

#### Relative Paths

Relative paths can omit the front slash or start with `./`

``` html
<a routerLink="sub-path">Home/Sub-Path</a>
<a routerLink="./sub-path">Home/Sub-Path</a>
<a routerLink="['/home', 'sub-path']">Home/Sub-Path</a>
```

To go back one path use `../`

### Active Router Styling

`routerLinkActive` can be used to apply specific CSS class when a route is active. All parent paths will also be considered active if a child path is accessed.

`[routerLinkActiveOptions]` can be used to apply CSS styling only when the exact path matches. (i.e. when we only want the child path to be considered active and not the preceding parent paths.)

``` html
<a routerLink="/home"
   routerLinkActive="some-css-class"
   [routerLinkActiveOptions]="{exact: true}">Home</a>
```

### Route in TypeScript

#### Absolute Paths

``` typescript
constructor (private router: Router) {}

this.router.navigate(['/home']);
```

#### Relative Paths

Unlike `routerLink`, `Router` does not have access to the current path the component is on. That is why we have to use `ActivatedRoute`.

``` typescript
constructor (private router: Router, private route: ActivatedRoute) {}

this.router.navigate(['sub-path'], {relativeTo: this.route});
```

### Route Parameters

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home/:paramOne/:paramTwo", component: HomeComponent}
];
```

To retrieve route parameters

``` typescript
constructor (private route: ActivatedRoute) {}

idOne: any = +this.route.snapshot.params['paramOne']; // To convert to number
idTwo: number = this.route.snapshot.params['paramTwo'];       
```

To dynamically check for changes in route parameters:

``` typescript
constructor(private route: ActivatedRoute) {}

idOne: number;
idTwo: number;
paramSubscription: Subscription = new Subscription();

this.paramSubscription = this.route.params.subscribe((params: Params) => {
    this.idOne = params['paramOne'];
    this.idTwo = params['paramTwo'];
});
```

To unsubscribe from changes:

``` typescript
this.paramSubscription.unsubscribe();
```

### Query Parameters

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home", component: HomeComponent}
];
```

To set query parameters:

``` html
<a [routerLink]="[/home]"
    [queryParams]="{name:'Arunam', age: 26}"
    [fragment]="'info'">/home?name=Arunam&age=26#info</a>      
```

``` typescript
constructor (private router: Router) {}

this.router.navigate(['/home'], {
    queryParams: {name:'Arunam', age: 26}, 
    fragment: 'info'
});
```

To retrieve query parameters:

``` typescript
constructor(private route: ActivatedRoute) {}

params: any[] = this.route.snapshot.queryParams;
fragment: any = this.route.snapshot.fragment;

this.route.queryParams.subscribe(...);
this.route.fragment.subscribe(...);
```

### Nested Routing

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {
        path: "home", 
        component: HomeComponent,
        children: [
            {path: "sub-path1", component: SubPath1Component},
            {path: "sub-path2", component: SubPath2Component},
        ]
    }
];
```

Make sure to add

``` html 
<router-outlet></router-outlet>
``` 

to the parent component.

### Preserving or Merging Query Parameters when navigating to sub-paths

When navigating to a new route you can either:

`merge`: Preserves the existing query parameters while adding new ones. If there are query parameters with the same name, the new ones will override the existing ones.

`preserve`: Preserves the existing query parameters. If you navigate to a different route without providing any query parameters, the existing query parameters will be preserved.

``` typescript
constructor (private router: Router) {}

this.router.navigate(['sub-path'], {
    relativeTo: this.route,
    queryParams: {email: 'arunam@email.com'},
    queryParamsHandling: 'merge' 
});

this.router.navigate(['sub-path'], {
    relativeTo: this.route,
    queryParamsHandling: 'preserve' 
});
```

### Redirecting and Wildcard Route

Paths can be redirected to other paths.

Wildcard path can be used to load a component when none of the other paths match.

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "some-path", redirectTo: '/home'},
    {path: "**", redirectTo: '/page-not-found'},
];
```

### Route Guards

#### CanActivate

#### CanActivateChild

#### CanDeactivate

### Passing Static Data to a Route

In `app-routing.module.ts`:

``` typescript
const routes: Routes = [
    {path: "home", component: HomeComponent, data: {message: "Message from route!"}},
];
```

To retrieve the data:

``` typescript
constructor(private route: ActivatedRoute) {}

// Retrieve the data once.
recievedMessage: string = this.route.snapshot.data['message'];
// Keep listening to the data for changes.
this.route.data.subscribe(...);
```

### Resolving Dynamic Data

## Observables

Observables are data sources that emit values over time and can be observed by components, enabling asynchronous programming and handling events, asynchronous requests, and data streams.

### Creating a Custom Observable

``` typescript
customObservable = new Observable((observer) => {
    setInterval(() => {
        observer.next("NEXT!");
        if (/* 'complete' condition */)
        {
            observer.complete();
        }
        if (/* 'error' condition */)
        {
            observer.error("ERROR");
        }
    }, 1000);
})
```

### Subscribing to an Observable

``` typescript
customSubscription: Subscription = new Subscription();
receivedData: any;

ngOnInit() 
{
    this.customSubscription = this.customObservable.subscribe({
        next: (data) => {
            this.receivedData = data;
        },
        error: (message) => {
            this.receivedData = message;
        },
        complete: () => {
            this.receivedData = "Complete!";
        }
    });
}
```

### Unsubscribing from an Observable

``` typescript
ngOnDestroy() 
{
    if(this.customSubscription)
    {
        this.customSubscription.unsubscribe();
    }
}
```

### Using Operators with Observables

### Subjects

Subjects are a special type of Observable that also act as an event emitter. The core difference between a normal Observable and a Subject is that an Observable emits some data at set intervals that are pre-determined by the observable. There is nothing a user can do to make an Observable emit. A Subject on the other hand can not only be subscribed to just like an Observable but also allows user to make it emit information when needed. This allows us to have more fine-grained control over our code.

In HTML:

``` angular2html
<button (click)="onClickEmit()">Emit</button>
<button (click)="onClickUnsubscribe()">Unsubscribe</button>
```

In TypeScript:

``` typescript
  subject = new Subject<any>();
  subscribeVariable: Subscription;

  constructor()
  {
    this.subscribeVariable = this.subject.subscribe((data) =>
    {
      console.log(data);
    });
  }

  onClickEmit()
  {
    this.subject.next("Message 1");
    this.subject.next("Message 2");
  }

  onClickUnsubscribe()
  {
    this.subscribeVariable.unsubscribe();
  }
```

## Forms

### Template Driven Forms

#### Using NgForm

In HTML:

``` angular2html
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
  <label for="username">Username</label>

  <input
    type="text"
    id="username"
    ngModel name="user">

  <button type="submit">Submit</button>
</form>
```

In TypeScript:

``` typescript
  onSubmit(form: NgForm)
  {
    console.log(form);
    console.log(form.value);
    console.log(form.value.user);
  }
```

#### Accessing NgForm with @ViewChild

In HTML:

``` angular2html
<form (ngSubmit)="onSubmit()" #f="ngForm">
  <label for="username">Username</label>

  <input
    type="text"
    id="username"
    ngModel name="user">

  <button type="submit">Submit</button>
</form>
```

In TypeScript:

``` typescript
  @ViewChild('f') nameForm !: NgForm;

  onSubmit()
  {
    console.log(this.nameForm);
    console.log(this.nameForm.value);
    console.log(this.nameForm.value.user);
  }
```

#### Data Validation and Custom Styling

List of all Validators: [https://angular.io/api/forms/Validators](https://angular.io/api/forms/Validators).

In HTML:

``` angular2html
<form (ngSubmit)="onSubmit()" #f="ngForm">
  <label for="username">Username</label>

  <input
    type="text"
    id="username"
    ngModel name="user"
    required>

  <label for="email">Email</label>

  <input
    type="text"
    id="email"
    ngModel name="email"
    required
    email>

  <button type="submit" [disabled]="!f.valid">Submit</button>
</form>
```

In TypeScript:

``` typescript
  @ViewChild('f') nameForm !: NgForm;

  onSubmit()
  {
    // code
  }
```

In CSS:

``` css
input.ng-invalid.ng-touched {
  border: solid red;
}

input.ng-valid {
  border: solid green;
}
```

#### Conditionally Generating Error Messages

In HTML:

``` angular2html
<form (ngSubmit)="onSubmit()" #f="ngForm">
  <label for="email">Email</label>

  <input
    type="text"
    id="email"
    ngModel name="email"
    required
    email
    #emailVariable="ngModel">

  <button type="submit">Submit</button>
</form>

<p *ngIf="!emailVariable.valid">Email is incorrect.</p>
```

In TypeScript:

``` typescript
  @ViewChild('f') nameForm !: NgForm;

  onSubmit()
  {
    // code
  }
```

#### Assigning Default Value

In HTML:

``` angular2html
<form (ngSubmit)="onSubmit()" #f="ngForm">
  <label for="username">Username</label>

  <input
    type="text"
    id="username"
    [ngModel]="defaultValue"
    ngModel name="user">

  <button type="submit">Submit</button>
</form>
```

In TypeScript:

``` typescript
  @ViewChild('f') nameForm !: NgForm;
  defaultValue: string = "Default Name";

  onSubmit()
  {
    // code
  }
```

#### Two-Way-Binding for Default Value and Input

In HTML:

``` angular2html
<form (ngSubmit)="onSubmit()" #f="ngForm">
  <label for="username">Username</label>

  <input
    type="text"
    id="username"
    [(ngModel)]="defaultValue"
    ngModel name="user">

  <button type="submit">Submit</button>
</form>

<p>{{ defaultValue }}</p>
```

In TypeScript:

``` typescript
  @ViewChild('f') nameForm !: NgForm;
  defaultValue: string = "Default Name";

  onSubmit()
  {
    // code
  }
```

#### Grouping Form Controls

In HTML:

``` angular2html
<form (ngSubmit)="onSubmit()" #f="ngForm">

  <div ngModelGroup="formGroup" #formInputs="ngModelGroup">
    <label for="username">Username</label>

    <input
      type="text"
      id="username"
      ngModel name="user">
  </div>


  <button type="submit">Submit</button>
</form>
```

In TypeScript:

``` typescript
  @ViewChild('f') nameForm !: NgForm;
  @ViewChild('formInputs') formInputsVar !: NgForm;

  onSubmit()
  {
    console.log(this.formInputsVar);
    console.log(this.formInputsVar.value);
  }
```

#### Radio Buttons

