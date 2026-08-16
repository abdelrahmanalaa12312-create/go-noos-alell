const express=require('express');const serverless=require('serverless-http');const app=express();app.use(express.json());
const recipes=[
{id:1,name:'إندومي بالبيض والجبنة',time:'5 دقائق',category:'سريع',ingredients:['إندومي','بيض','جبنة'],description:'وجبة سريعة ومشبعة بمكونات بسيطة.'},
{id:2,name:'ساندوتش جبنة',time:'3 دقائق',category:'ساندوتشات',ingredients:['عيش','جبنة','طماطم'],description:'ساندوتش خفيف وسريع وقت الجوع.'},
{id:3,name:'بيض بالطماطم',time:'7 دقائق',category:'فطار',ingredients:['بيض','طماطم','زيت'],description:'طبق بسيط للفطار أو وجبة سريعة.'},
{id:4,name:'بطاطس سريعة',time:'10 دقائق',category:'سريع',ingredients:['بطاطس','زيت','ملح'],description:'بطاطس مقرمشة بطريقة سهلة.'},
{id:5,name:'تونة بالعيش',time:'4 دقائق',category:'ساندوتشات',ingredients:['تونة','عيش','ليمون'],description:'ساندوتش تونة سريع ومناسب للسهر.'},
{id:6,name:'مكرونة بالجبنة',time:'12 دقيقة',category:'مكرونة',ingredients:['مكرونة','جبنة','لبن'],description:'مكرونة كريمية بمكونات متوفرة في البيت.'}];
app.get('/api/recipes',(req,res)=>res.json(recipes));app.get('/api/recipes/:id',(req,res)=>{const x=recipes.find(r=>r.id===+req.params.id);x?res.json(x):res.status(404).json({message:'الوصفة غير موجودة'})});app.get('/api/categories',(req,res)=>res.json([...new Set(recipes.map(r=>r.category))]));app.get('/api/health',(req,res)=>res.json({ok:true}));module.exports.handler=serverless(app);