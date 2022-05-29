export default (assetPath)=>{
    const publicUrl = assetPath.toString().startsWith('data:image') ? '':process.env.PUBLIC_URL;
    return publicUrl+assetPath;
}