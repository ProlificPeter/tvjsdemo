var compilationTemplate = function(simpleText) { 

//todo: accept simpleText as an object or array to populate information

   return `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <compilationTemplate>
      <background>
         …
      </background>
      <list>
         <relatedContent>
            <itemBanner>
               …
            </itemBanner>
         </relatedContent>
         <header>
            …
         </header>
         <section>
            <header>
               <title>Title</title>
            </header>
            <listItemLockup>
               …
            </listItemLockup>
         </section>
      </list>
      </compilationTemplate>
   </document>`
}
