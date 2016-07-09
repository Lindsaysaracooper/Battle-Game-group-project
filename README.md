## Day 20 - Constructors and Prototypes

- var jess = new user;
- The 'new' is what makes this s constructor
- "an instance of a jess" is the language to frame this
-str.hasOwnProperty('length') You can change out length to see if it has various properities


### Prototypes
- the new also shows that it is a prototype meaning that what goes for this one goes for the remaining objects
- an object that other objects that look up methods on
- add .prototype.whatever = fuction ()
```user.prototype.login = function (){
  console.log ('You are logged in');
};

```
### Rule of Thumb
- properities go inside a constructor because each object has unique versions of those properities
methods go on a prototype because it is fine for every instance of that pbject to share that method

### Challenges

Creating a shout method:
shout method and 4 exclamation points
```
String.prototype.shout = function (){
  return this.toUpperCase() + ('!!!!');
};
```


console.log("Hi my name is Coop".shout());

create a counter constructor that allows us to increment and decrement easily it should have the increment method they should change the value by 1 by default or by whatever number that passes


function Counter(num){
  this.value = num || 0;
};

var C= new Counter ();
Counter.prototype.increment = function (){
  return this.value += 1;
};

  c.increment();

### Github flow with collaborators
  1. One person makes a github repo
  2. Go into github and add partners as collaborators
  3. collaborators accept the email
  4. collaborators clone the project to their local machine
  - in terminal= git clone url path to folder (be in the folder you want it to be aka day 20)
  5. EVERYONE works on a feature branch NEVER on master
  6. to make a new branch git checkout -b "branchname"
  7. to checkout an existing branch git checkout "branchname"
  8. git pull origin master when someone does something before me
  9. git push "branchname" if i finish something before everyone else
