# CoVaMaT : Context Variety Management Tool

**CoVaMaT** is a tool developed to assist in the variety identification process (top-down and/or bottom-up), as shown in the next figure.

![image](https://github.com/user-attachments/assets/d917618e-8b86-471f-952c-ddcf7001ee47)

 A variety identification process determines how  a Big Data System can be developed, and  is implemented using these tow approaches:

*Top-down (T-VIP) approach*: In this approach, left hand side of the figure,  (1) given a domain problem, an expert user elaborates one or more hypotheses that should be tested through data analysis (i.e. Are data supporting this?); (2) then, the hypotheses are taken by data analysts who proceed to carry out  the activities included in a Big Data Process (3); finally, results are returned to verify the hypotheses (4) possibly visualizing data in different ways, and allowing hypothesis reformulation or process ending, alternatively (5). 

*Bottom-up (B-VIP) approach*: In this approach, right hand side of the figure, (1) given a domain problem, an expert user decides to launch an exploratory study to find out what data can reveal for this problem (i.e. What do data say?); (2) then, the study is carried out by data analysts (2), again by applying the activities included in a Big Data Process (3); and finally, results (findings) are returned to be validated with experts (4), alternately ending the process or reformulating the search (5).

In the middle of the figure, we can see the activities of the Big Data Process including *collection* of source data, *preparation* and *transformation* of these source data, *analytics* of data for analyzing prepared data and determining the processing type (batch, real-time, etc.), *visualization* of the resulting analysis, and *access* of data consumers to these results. 
Following, the left side of the figure shows how the variety can influence design decisions. We define four varieties: (1) *source variety* during *collection*,  helps to detect different data structures, acquisition techniques, etc., (2) *content variety* is focused on the way data should be transformed according to relevant variables for the business goals to be achieved, mostly considering source variations during *preparation*, (3) *process variety*  helps detect variations in data analysis techniques and it is particularly involved in *analytics* and visualization, and (4) *context variety* allows developers to identify domain variations that may constrain or affect the results of the analysis during the whole Big Data system development. 


Finally, highlighted components in the figure are the *knowlegde-based assets* (in green in the figure). These components represent the repositories that software/AI engineers/developers can use to develop BD systems, reducing the need to re-create components that provide similar functionalities.  Here, we can see CoVaMaT, that  acts as a *domain asset repository*, which is focused on allowing the definition of domain assets (for variety and case definitions), and reuse previous experiences of use in the same or similar domains/sub-domains. 




## Documentación

La documentación completa de la arquitectura, descripción de servicios, implementación puede encontrarse en el trabajo de tesis.

## Ejecución

En este repositorio se encuentra implementado el servidor GraphQL, para inicializarlo ejecutar los siguientes comandos

<pre>
<code>
cd server
nvm use (linux)
nvm use 19.0.0 (windows)
npm i
npm start
</code></pre>
