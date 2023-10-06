import fileinput
import glob

files = glob.glob('*.html') + glob.glob('projects/*.html')

general_nagivation_bar = "<div class=\"center\"><a href=\"index.html\">Home</a><a href=\"demos.html\">Demos</a><a href=\"math.html\">Math</a><a href=\"mailto:greg.micah.jensen@gmail.com\">Email</a><a href=\"https://www.gregjensen.dev/blog\">Blog</a><a href=\"https://www.github.com/g-jensen\">GitHub</a></div>\n"

projects_nagivation_bar = "<div class=\"center\"><a href=\"../index.html\">Home</a><a href=\"../demos.html\">Demos</a><a href=\"../math.html\">Math</a><a href=\"mailto:greg.micah.jensen@gmail.com\">Email</a><a href=\"https://www.gregjensen.dev/blog\">Blog</a><a href=\"https://www.github.com/g-jensen\">GitHub</a></div>\n"

for filename in files:
    data = []
    with open(filename,'r') as file:
        data = file.readlines()
        i = data.index("<body>\n") + 1
        if filename.startswith("projects"):
            data[i] = projects_nagivation_bar
        else:
            data[i] = general_nagivation_bar
    with open(filename, 'w') as file:
        file.writelines(data)