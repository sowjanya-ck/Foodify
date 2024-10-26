## build food app
       
              * Header
              -logo
              -nav items
                     -about home etc links
              * Body
              -Search
              -RestaurantContainer
                     -RestarantCard
                     -img,
                     - name of restaurant, start rating,cuisine, delivery time
              * Footer
              -Copyright
              -address
              -contact
              -links

### 1. plan the page 
### 2. make the res-card dynamic by props.
       -> props: passing the argument to a function.
       -> props destructuring
       -> config driven UI : based on the different data , UI is designed according to the data given by the COnfig.
            -> ex: carousal is different for different city in food app.
### 3. make the res-card dynamic by json data,  
       -> always use a key, whenever looping the elements. 
          -> index as a key is not acceptable.
---- rafce ->short cut to create a compoenent
### 4. two types of export/import
       * default export/import
         export default Component
         import component from "path";
       
       * named export/import 
         export const component
         import {component} form "path";

### 5. React hooks
       - Normal js utilty functions
              -useState()
       -useEffect()

### 6. virtual DOM concept
       - DIff alogirthm finds out the difference btn old virtual dom and updated virtual dom and then updates the actual dom.
       -virtual dom = it is the representation of the actual dom, its a react object.

### 7. useState()

### 7.2 useEffect() : called after the body compoenent renders.9
        * resolve cors error by adding cors alow origin extension to chrome.

### 7.3 use Shimmer ui
        once the page renders, show some fake card ,instead of not showing anything.

### 8 add login logout button 
       usuing usestate login and logout created by onclick event.
### 8.1 create a search bar
       -create one more use state for filteredrestarant, so that if the user search the partiucular restarant and sarch it again
       , it will consider whole restaraunts and search the data. so bcs of this mainatin one more filteredrataurant and update the setfilertedrestarant after the search.

### 9  useEffct and usestate recap
### 9.1 useEffect 
       -if no dependedncy array then useEffect is called on every rendering.
       -if empty dependecy array present, usefecct is called on initial render(just once);
       -if we put something inside the dependcy array then , useffect is called if the dependcy array changes.
### 9.2 useState 
       -never create a usestate outside of the component body. useState is used to create a local state variable isnide the functional component.
       -dont create a state variable inside the if else condion , and for loop and inside the function though its isndie the body componet.
       -always create a state variable in the top level of the functional component.

### 9.3  React router

### 9.4 navigation
       -   its not good way to use anchor tag like below, because its refreshes the whole page. *
                    <li>< a href="/about"> About us </a></li> 
       - so use link to avoid the refresh.
### 9.5 two types of routing in web appps
       - client side routing
       - Server side routing


### 9.6   pass dynamic data by using column
       -  path: "/restaurants/:resId", here :resId is dynamic
       - using link action and dynamic id , each res card is clickable and goes to resmenu.

## expisode 08 
### 9.7 Class based component
       - class commpojent extends the react componet and it has render method , that return the some piece of jsx.
       -to get the props inside the class component shoud create constructor and inside should write super(props).
       - create a this.state inside the construtor and intiliaze the usestate params.
       - here this.state which holds all the state variable.
       - use this.setState({count: this.state.count +1})
### 9.8 How it is class compoment mounted on the webpage?
       -parent class then childern , then contrsturor , then render is called
       - componetnDidmount will be called once the componet has been completetly mounted.(constructor, render- componetdimount)
       -parent contrustor,parent render,childer contsure,childern render,childer didmount,parent did mount.
       -

### 9.9 react lifecycyel  vip
       - parent contructor
       -parent render
       -      childern....
       if there are multiple child classes then how it will work?
       - parent contructor ,parent render
              firt childe constctur
              first childe render
              (first coumpoent didmout not trigger here now.)
              - second child contructor
              -second chield render
              -first componet didmount
              secoond compoent didmout
              -parent componet dicmlut

       - why? 
       - react life cyclec has two phase : one is render phase thats inlcudes constructor and render method. second phase is commit phase which inlcudes updates the dom,  componentent did mount commit happnens. 
       - react batches the children render phase. so first completes the render mehtod. and then componnet did mount trigger.

#### step by step: with live github api 
     1. mounting cycle 
       - constructor is called
       - render dummy html 
       - component did mount is called and 
                     -fetch the gihthub api
                     - this.setstate 
       -
    2. Update
              - render happens with new api data
              - html loads
              -componet didupdate
    3. componet unmount
              - return once swithc to other componetn


       -
### 9.10 optimizing our app 
       - Custom hook. 
              - we will create custom hook that will fetch the data and give it to restarantmenu.
              - always start small letter 'use' will creating the cusotm hook.for ex, useRestarauntMenu.js
              - built online - offline check status . using usefect and created a custom hook
              
       - lazy loading: only load the page contnent wheenver we go to that page , not when the app loads .
       -Lazy loading in React allows you to split your code into smaller chunks, loading only the code that is needed for a particular part of your application when it is actually required. This can improve the initial loading time of your application

## Tailwand CSS
use tailwand css IntelliSense extension 
 - flex justify-between bg-pink-100 
 - shadow-lg , for margin mb-4
 - align-items: center = items-center
 - specific size then w-[200px]
 - flex-wrap
 - #### if we dont get suggestion , then use ctrl+ spacebar
 - if we want to apply the css based on the size of the device then 
  ex: lg:bg-green-200 => means if greater than lg then backgound color is green

### 11 episode data is the new oil  
## higher order compoent 
  - its  a function that takes a component as an argument and returns a new component that wraps the original component.
  - basically it takes the data from the original compoent and enhance it , returns new componet from it.
  - use spread operator. <ResCard {...props} /> which takes all the props thats in the parent compoent too.
### use accordian to collapse and show. 
### for each itemcategory build an accordian 
- if the parent compoent controlling  its child componet  then child compoent is controlled component. 
- here ResCateorgy is controlled compknet  as its controlled by its parent restaruant Menu component. how bsc passing the showitems as a props and controlling through parent compoent.


### 11.3 props drilling 
       -the process of passing data from a parent component down to nested child components through props.
       - this can be cured using context. 
### 11.3.1 context 
       - createContext is a method provided by React's Context API that facilitates a way to pass data through the component tree without having to pass props down manually at every level.
       - and useContext hook provides function components access to the context value for a context object.
        - so using the context we can pass the props to any component by aviding the props drilling.     
       - can access the context in class component also by using .consumer.
       - for example <UserContext.Consumer>{({data}) => ({data})}</UserContext.Consumer>>


### 11.3.2 how can we modify the context data?
       using provider . 
       wrapping the component which we want to modify the data using provider.for example like this, <UserContext.Provider value={{loggedUser:userName}}>
    -> what will happen if we bound the compoennt with diff provider value, will it takes parent one ? or what?
       data will be overridden, so it will take latest modifed one not the first one or parent one.

## 12. what is redux in react?
       - react and redux are two fiff library.
       - we can build the application without redux also.
       - redux is a state management tool in react.
       - help us to debug the application easily.

       redux tookkit is advanced that the rudex.

## 12.1 add a items to cart 
       - install @redux/toolkit and react-redux
       - click on add+ -> disaptch a action -> calls a function-> increments the cart(modifies the cart)
       -> call a function called - calls reducer function

       -> selector will reads the data or the cart and mdofies the react compoent of the cart

## 12.2 steps involves
       - build oour store
       -connect our store to our app
       -slice(Cartslice)
       -dispact action
       - selector
### 12.3 
       - use useSelector hook for react-redux library.
advantge or imp of redux .
       - in older redux - mutate state is prohibitated. 
       -in older version, we need to create newstate then psuh it , then need to return.now we can mutate state.
       
       

