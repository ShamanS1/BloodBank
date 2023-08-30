from django.shortcuts import render, redirect
from .models import Donor
from django.contrib.auth.models import User,auth
from django.contrib import messages

def index(request):    
     if request.method == 'POST':
        # data from the form
        fname = request.POST['fname']
        lname = request.POST['lname']
        phoneno = request.POST['phone']
        email = request.POST['email']
        blood_type = request.POST['bloodType']
        gender=request.POST["gender"]
        address = request.POST['address']
        city = request.POST['city']
        state = request.POST['state']
        pincode = request.POST['pincode']
        donor=Donor(fname=fname,lname=lname,phone=phoneno,email=email,blood_type=blood_type,gender=gender,address=address,city=city,state=state,pincode=pincode) 
        donor.save()
        print('data saved')
        return redirect('display/')
     else:
        return render(request, "index.html")

def display(request):
    donor_list = Donor.objects.all()
    if User.is_authenticated:
        return render(request, "display.html", {'donor_list': donor_list})
    else:
        messages.info(request, 'Please login to view the list')
        return redirect('/')
 
def register(request):
    if request.method == 'POST':
        # Get data from the form
        username = request.POST['username']
        password = request.POST['password']
        password2 = request.POST['password2']
        email_id = request.POST['email'] 
        if password == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Username taken')
                return redirect('register')
            elif User.objects.filter(email=email_id).exists():
                messages.info(request, 'Email taken')
                return redirect('register')
            else:
                user= User.objects.create_user(username=username, password=password, email=email_id)
                user.save()
                print('user created')
                return render(request, "login.html")
            
        else:
            messages.info(request, 'Password not matching')
            return redirect('register')
    else:
        return render(request, "register.html")
    

def login(request):
   if request.method == 'POST':
       username = request.POST['username']
       password = request.POST['password']
       user= auth.authenticate(username=username,password=password)
       if user is not None:
           auth.login(request,user)
           return redirect('/')
       else:
              messages.info(request,'Invalid Credentials')
              return redirect('login')
   else:
       return render(request, "login.html")

def logout(request):
    auth.logout(request)
    return redirect('/')

