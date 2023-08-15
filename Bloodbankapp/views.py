from django.shortcuts import render, redirect

# Initialize an empty list to store donor data
donor_list = []
def sign(request):
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

        # Redirect to the display page after form submission
        return render(request,"display.html", {'donor_list': donor_list})

    return render(request, "index.html")

def display(request):
    # Pass the donor_list to the template
    return render(request, "display.html", {'donor_list': donor_list})
