# char_list=["a","n","t","a","a","t","n","n","a","x","u","g","a","x","a"]
# i=0
# list=[]
# while i<len(char_list):
#     j=0
#     count=0
#     list_2=[]
#     while j<len(char_list):
#         if char_list[i]==char_list[j]:
#             count+=1
#         j+=1
#     list_2.append(char_list[i])
#     list_2.append(count)
#     if list_2 not in list:
#         list.append(list_2)
#     i=i+1
# print(list)

# a="i am pooja"
# split function 
# sentence=input("enter some text:-")
# new_list=[]
# string=""
# for i in (sentence+" "):
#     if i==" ":
#         new_list.append(string)
#         string=" "
#     else:
#         string+=i
# print(new_list)

# Title function
# sentence=input("enter the sentence:-")
# words=sentence.split(" ")
# new_list=[]
# for i in words:
#     words_1=i[0].upper()+i[1:]
#     new_list.append(words_1)
# print(" ".join(new_list))

# dict1={"India":"Delhi","Foreign":"America","United state":"Washington"} 
# dict2={"France":"Paris","India":"Delhi","U.P":"Lakhnow"} 
# dict3=dict1.copy() 
# for key,value in dict2.items():
#     dict3[key] =value
# print(dict3)

# def numbers(num):
#     result=[[]]
#     for n in num:
#         new_list=[]
#         for index in result:
#             for i in range(len(index)+1):
#                 new_list.append(index[:i]+[n]+index[i:])
#                 result=new_list
#     return result
# my_nums=[1,2,3,4]
# print("original collection:",my_nums)
# print("collection of numbers:\n",numbers(my_nums))

# numbers=[]
# for num in range(100):
#         num=str(num).zfill(3)
# print(num)
# numbers.append(num)

# for i in range(1,101):
#     print(i,100,sep="  ")

# user=input("enter the word")
# if user==user:
#         print(user+"ing"+"ly")
# elif  user=="ing":
#         print(user+"ly")
# elif user=="ly":
#         print(user+"ing")
# if user==user:
#         print(user+"ing"+"ly")
# else:
#         print("word")  

# a = "prity"
# a=[1,1,2,3,4,2,6,2,3,1,1,]
# output : {p:0,r:1,i:2,t:3,y:4}

# i=0
# k={}
# length=0
# while i<len(a):
#     if len(a[i])==length:
#         length=len(a)
#         j=a[i]
#     i=i+1
# k.append(j)
# print(j)

# i=0
# k={i}
# while i<len(a):
#     j=0
#     count=0
# #     length=0
#     while j<len(a):
#         if a(len[i])==a:
#             count+=1
#         j+=1
#     # b.append(a[i])
#     k.append(count)
#     if k not in a:
#         a. append(k)
#     i=i+1
# print(k)

# student=["risabh","madhurima","rahul","abhisekh","faizal","muskan"]
# marks=[10,20,56,45,36,20]
# i=0
# while i<len(student):
#     print(student[i],marks[i])
#     i=i+1

# k="POOJA"
# i=0
# while i<len(k):
#         a=0
#         while a<=i:
#                 print(k[a],end="")
#                 a=a+1
#         print()
#         i=i+1

# letter=["q","z","x"]
# user=int(input("enter the num:--"))
# i=0
# a=[]
# while i<len(letter):
#     j=1
#     while j<=user:
#         b=letter[i]+str(j)
#         a.append(b)
#         j=j+1
#     i=i+1
# print(a)

# n=int(input('Enter: '))
# o, s, k = n, 0, 0
# while n>0:
#     # k=n%10
#     s=s+(n%10)*(n%10)*(n%10)
#     n=n//10
#     k+=1
#     # print(n)
# print('no. of digits in given number is: ', k)

# num=int(input("enter the num:-"))
# list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
# k=[]
# i=0
# while i<len(list)-num:
#     k.append(list[i])
#     i=i+1
# j=1
# while j<=num:
#     k.append(list[-j])
#     j=j+1
# print(k)


# num=int(input("enter the num:-"))
# b=str(num)
# length=len(b)
# k=length-1
# i=0
# while i<len(b):
#     code=int(b[i])
#     n=(code)*10**k
#     if i==0:
#         # print('"',num,end=" ")
#         print(num,end=" ")
#     else:
#         print(n,end="")
#     if i!=len(b)-1:
#         print("+",end=" ")
#     i=i+1
#     k=k-1
# print('"')   
# output=" 1234 + 200+ 30+ 4",output="1234"+"234"+"34"+"4"

# list=["true","false","true","true","false","true"]
# a=[]
# i=0
# c=0
# c1=0
# while i<len(list):
#     if list[i]=="true":
#         k=list[i]
#         c=c+1
#     elif list[i]=="false":
#         c1=c1+1
#     else:
#         pass
#     i=i+1
# if c>c1:
#     a.append(k)
#     print(a)
# else:
#     a.append(k)
#     print(a)


