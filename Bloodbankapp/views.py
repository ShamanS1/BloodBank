from django.shortcuts import render, redirect

# Initialize an empty list to store donor data
user_data = []
donor_list = []
def sign(request):
    if request.method == 'POST':
        # Get data from the form
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')

        # Create a dictionary with the collected data
        user_data = {
            'username': username,
            'password': password,
            'email': email
        }

        # Append the donor data dictionary to the list
        user_data.append(user_data)   
    return render(request, "sign.html")

def index(request):
    if request.method == 'POST':
        # Get data from the form
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        blood_type = request.POST.get('bloodType')
        address = request.POST.get('address')
        city = request.POST.get('city')
        state = request.POST.get('state')
        pincode = request.POST.get('pincode')

        # Create a dictionary with the collected data
        donor_data = {
            'fname': fname,
            'lname': lname,
            'phone': phone,
            'email': email,
            'blood_type': blood_type,
            'address': address,
            'city': city,
            'state': state,
            'pincode': pincode
        }

        # Append the donor data dictionary to the list
        donor_list.append(donor_data)
    return render(request, "index.html")

def display(request):
    # Pass the donor_list to the template
    return render(request, "display.html", {'donor_list': donor_list})
