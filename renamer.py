import os
dir1 = 'music/'
dir2 = 'stars/'
def renamer(dir):
    for i in os.listdir(dir):
        newTruncatedName = dir+i[:-4]+'.mp3'
        fileDir = dir+i;
        os.rename(fileDir,newTruncatedName)
    print()
    print("Renamed FIles")
    for i in os.listdir(dir):
        print(i)

renamer(dir2)
# mass = {
#     'name':'',
#     'displayName':''
# }
# # renamer(dir2)
# for i in os.listdir(dir2):
#     # print(i)
#     mass['name']=i
#     mass['displayName']=i[:-4]
#     temp = str(mass)
#     x= temp.replace("'name'","name")
#     x= temp.replace("'displayName'","displayName")

#     print(x,end=',')

#     # print(mass,end=',')
#     print()
