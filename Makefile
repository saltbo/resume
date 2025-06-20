
build:
	resume export resume.html --theme macchiato
	puppeteer --wait-until networkidle0 --margin-top 0 --margin-right 20 --margin-bottom 0 --margin-left 20 --format A4 print resume.html resume.pdf
