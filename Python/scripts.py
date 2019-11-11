import PyPDF2
from pathlib import Path
from tabula import read_pdf
home = str(Path.home())

"""
pdfFileObj = open(home + '/documents/11.11.19.pdf', 'rb')

pdfReader = PyPDF2.PdfFileReader(pdfFileObj) 
  
print(pdfReader.numPages) 
  
pageObj = pdfReader.getPage(0) 
  
print(pageObj.extractText()) 
  
pdfFileObj.close()
"""

schedule = read_pdf(home + '/documents/11.11.19.pdf', output_format='json')
print(schedule)
